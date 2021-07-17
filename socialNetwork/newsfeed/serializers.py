from rest_framework.serializers import ModelSerializer
from .models import Post, PostImage, Comment


class PostImageSerializer(ModelSerializer):
    class Meta:
        model = PostImage
        fields = '__all__'


class PostSerializer(ModelSerializer):
    post_images = PostImageSerializer(many=True)

    class Meta:
        model = Post
        fields = '__all__'


class PostCreateSerializer(ModelSerializer):
    post_images = PostImageSerializer(many=True)

    class Meta:
        model = Post
        fields = ["user", "content", "post_images"]

    def create(self, validated_data):
        post_images = validated_data.pop("post_images")
        post = Post.objects.create(**validated_data)

        for pi in post_images:
            PostImage.objects.create(**pi, post=post)
        return post


class PostPutSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ["user", "content"]


class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
