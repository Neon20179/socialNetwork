from django.urls import path
from rest_framework import routers
from .views import UserPostList, UserPostDetail, CommentAPI

urlpatterns = [
    path('user_posts/', UserPostList.as_view()),
    path('user_posts/<int:pk>/', UserPostDetail.as_view()),
    path('comments/', CommentAPI.as_view()),
]
