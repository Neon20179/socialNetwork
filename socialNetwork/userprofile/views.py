from rest_framework import generics, permissions, views
from rest_framework.response import Response
from followers.models import Follow
from .models import User
from .serializers import UserSerializer


class ProfileList(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)


class UserAPI(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        followers_number = Follow.objects.get_followers_quantity(request.user)
        following_number = Follow.objects.get_following_quantity(request.user)
        user = User.objects.get(id=request.user.id)
        data = {
            "id": user.id,
            "username": user.username,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "sex": user.sex,
            "lang": user.lang,
            "email": user.email,
            "bio": user.bio,
            "avatar_image": user.avatar_image,
            "header_image": user.header_image,
            "user_images": user.user_images,
            "followers_quantity": followers_number,
            "following_quantity": following_number
        }
        serialized_user = UserSerializer(data)
        return Response(serialized_user.data)
