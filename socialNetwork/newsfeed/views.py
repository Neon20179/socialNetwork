from django.shortcuts import render
from rest_framework import viewsets
from .models import Post
from .serializers import PostListSerializer


class PostListReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.filter()
    serializer_class = PostListSerializer
