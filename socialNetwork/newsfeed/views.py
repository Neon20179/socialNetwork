from django.db.models import Q
from django.http import Http404
from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination
from friendship.models import Friend
from followers.models import Follow
from .models import Post, Comment
from .serializers import PostSerializer, PostCreateSerializer, PostPutSerializer, CommentSerializer
from .permissions import IsOwnerOrReadOnly


class UserPostList(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format="json"):
        posts = Post.objects.filter(user=request.user.id)
        serializer = PostSerializer(posts, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)

    def post(self, request, format="json"):
        request.data.pop("user", None)

        serializer = PostCreateSerializer(data={**request.data, "user": request.user.id})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class UserPostDetail(APIView):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)

    def get_object(self, pk):
        try:
            obj = Post.objects.get(pk=pk)
            self.check_object_permissions(self.request, obj)
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, pk, format="json"):
        post = self.get_object(pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def put(self, request, pk, format="json"):
        post = self.get_object(pk)
        serializer = PostPutSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format="json"):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CommentAPI(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format="json"):
        """ Returns all comments from post """
        post_id = request.query_params.get('post')
        if post_id:
            comments = Comment.objects.filter(post=post_id)
            serializer = CommentSerializer(comments, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class NewsfeedAPI(APIView, LimitOffsetPagination):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format="json"):
        friends = [f.friend for f in Friend.objects.select_related("friend").filter(user=request.user)]
        following = [f.following for f in Follow.objects.select_related("following").filter(follower=request.user)]
        qs = Post.objects.filter(Q(user__in=following) | Q(user__in=friends))
        pqs = self.paginate_queryset(qs, request, view=self)
        serializer = PostSerializer(pqs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
