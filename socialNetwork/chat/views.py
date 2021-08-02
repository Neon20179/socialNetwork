from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import status, permissions, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from core.utils import catch_unexpected_error
from .models import GroupChat, PrivateChat
from . import serializers


@permission_classes((permissions.IsAuthenticated,))
@api_view(["GET"])
@catch_unexpected_error
def get_user_chats(request):
    private_chats = PrivateChat.objects.filter(Q(user1=request.user) | Q(user2=request.user))
    group_chats = GroupChat.objects.filter(users=request.user)
    serialized_private_chats = serializers.PrivateChatsListSerializer(
        private_chats,
        many=True,
        context={"user": request.user}
    ).data
    serialized_group_chats = serializers.GroupChatsListSerializer(group_chats, many=True).data
    chats = serialized_private_chats + serialized_group_chats
    return Response(chats, status=status.HTTP_200_OK)


class PrivateChatViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated, )
    
    def get_object(self, pk):
        queryset = PrivateChat.objects.all()
        return get_object_or_404(queryset, pk=pk)

    # @catch_unexpected_error
    def create(self, request):
        create_data = {
            "user1": request.user.id,
            "user2": request.data["companion"]
        }
        serialized_chat = serializers.PrivateChatCreateSerializer(data=create_data)
        if serialized_chat.is_valid():
            serialized_chat.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @catch_unexpected_error
    def retrieve(self, request, pk):
        chat = self.get_object(pk)
        serialized_chat = serializers.PrivateChatDetailSerializer(chat, context={"user": request.user})
        return Response(serialized_chat.data, status=status.HTTP_200_OK)


class GroupChatViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated, )

    def get_object(self, pk):
        queryset = GroupChat.objects.all()
        return get_object_or_404(queryset, pk=pk)

    # @catch_unexpected_error
    def create(self, request):
        serialize_ready_data = {
            "users": [request.user.id] + list(map(int, request.data['users'])),
            "name": request.data["name"],
            "icon": request.FILES.getlist('icon')[0]
        }
        serialized_chat = serializers.GroupChatCreateSerializer(data=serialize_ready_data)
        if serialized_chat.is_valid():
            serialized_chat.save()
            return Response(status=status.HTTP_201_CREATED)
        print(serialized_chat.errors)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    @catch_unexpected_error
    def retrieve(self, request, pk):
        chat = self.get_object(pk)
        serialized_chat = serializers.GroupChatDetailSerializer(chat)
        return Response(serialized_chat.data, status=status.HTTP_200_OK)

    @catch_unexpected_error
    def update(self, request, pk):
        GroupChat.objects.add_to_chat(
            added_user_id=request.data["added_user"],
            chat_id=pk,
            user=request.user
        )
        return Response(status=status.HTTP_204_NO_CONTENT)
