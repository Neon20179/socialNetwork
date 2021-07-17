from rest_framework import serializers
from .models import UserImage, LANG_CHOICES


class UserImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserImage
        fields = '__all__'


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    username = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    sex = serializers.CharField()
    lang = serializers.CharField()
    email = serializers.EmailField()
    bio = serializers.TimeField()
    avatar_image = serializers.ImageField()
    header_image = serializers.ImageField()

    user_images = UserImageSerializer(many=True)

    followers_quantity = serializers.IntegerField()
    following_quantity = serializers.IntegerField()
