from django.urls import path
from .views import UserPostList, UserPostDetail, CommentAPI, NewsfeedAPI

urlpatterns = [
    path('user_posts/', UserPostList.as_view(), name='user_post_list'),
    path('user_posts/<int:pk>/', UserPostDetail.as_view(), name='user_post_detail'),
    path('comments/', CommentAPI.as_view()),
    path('', NewsfeedAPI.as_view(), name="feed"),
]
