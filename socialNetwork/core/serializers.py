from rest_framework import serializers
from userprofile.models import User


class LinkUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "avatar_image"]


class ExceptionSerializer(serializers.Serializer):
    error_message = serializers.CharField()
