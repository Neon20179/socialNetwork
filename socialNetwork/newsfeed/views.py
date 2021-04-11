from django.http import Http404
from rest_framework import permissions, status, exceptions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Post, Comment
from .serializers import PostSerializer, PostCreateSerializer, CommentSerializer
from .permissions import IsOwnerOrReadOnly


class UserPostList(APIView):
    permission_classes = (permissions.IsAuthenticated)

    def get(self, request, format=None):
        posts = Post.objects.filter(user=request.user.id)
        serializer = PostSerializer(posts, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)

    def post(self, request, format=None):
        if request.user.id == request.data["user"]: # allows post method to be used only by the account owner
            serializer = PostCreateSerializer(data=request.data)
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
    

    def get(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = PostCreateSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CommentAPI(APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request, format=None):
        """ Returns all comments from post """
        post_id = request.query_params.get('post')
        if post_id:
            comments = Comment.objects.filter(post=post_id)
            serializer = CommentSerializer(comments, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)
