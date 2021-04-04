from rest_framework.serializers import ModelSerializer
from .models import Post, PostImage, Comment


class PostImageSerializer(ModelSerializer):
    
    class Meta:
        model = PostImage
        fields = '__all__'


class PostListSerializer(ModelSerializer):
    post_images = PostImageSerializer(many=True)

    class Meta:
        model = Post
        fields = '__all__'
