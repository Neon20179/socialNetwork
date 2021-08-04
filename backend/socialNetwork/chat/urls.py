from django.urls import path
from rest_framework import routers
from .views import get_user_chats, PrivateChatViewSet, GroupChatViewSet

router = routers.DefaultRouter()
router.register(r'private_chat', PrivateChatViewSet, basename='private_chat')
router.register(r'group_chat', GroupChatViewSet, basename='group_chat')

urlpatterns = [
    path('chats/', get_user_chats, name='user_chats'),
] + router.urls
