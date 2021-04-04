from rest_framework.serializers import ModelSerializer
from .models import User, UserImage


class UserImageSerializer(ModelSerializer):

    class Meta:
        model = UserImage
        fields = '__all__'


class UserSerializer(ModelSerializer):
    user_images = UserImageSerializer(many=True)

    class Meta:
        model = User
        fields = [
            'id', 'username', 'first_name', 'last_name', 'sex',
            'email', 'bio', 'avatar_image', 'header_image', 'user_images',
        ]
