from django.http import request
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from core.serializers import UserLinkSerializer
from core.utils import stringify_created_at
from .models import PrivateChat, GroupChat, Message


class MessageSerializer(ModelSerializer):
    user = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()

    class Meta:
        model = Message
        fields = '__all__'

    def get_created_at(self, message: Message):
        return stringify_created_at(message.created_at)
    
    def get_user(self, message: Message):
        return UserLinkSerializer(message.user).data


class PrivateChatsListSerializer(ModelSerializer):
    companion = serializers.SerializerMethodField()

    class Meta:
        model = PrivateChat
        fields = ["id", "companion"]
    
    def get_companion(self, chat: PrivateChat):
        request = self.context['request']
        companion = chat.user1 if request.user != chat.user1 else chat.user2
        return UserLinkSerializer(companion, context={'request': request}).data


class PrivateChatDetailSerializer(PrivateChatsListSerializer):
    messages = serializers.SerializerMethodField()

    class Meta:
        model = PrivateChat
        fields = PrivateChatsListSerializer.Meta.fields + ['messages']

    def get_messages(self, chat: PrivateChat):
        return MessageSerializer(chat.messages, many=True).data


class PrivateChatCreateSerializer(ModelSerializer):
    class Meta:
        model = PrivateChat
        fields = ["user1", "user2"]
    
    def create(self, validated_data):
        chat = PrivateChat.objects.get_or_create(user1=validated_data.pop("user1"), user2=validated_data.pop("user2"))
        return chat


class GroupChatsListSerializer(ModelSerializer):
    users = UserLinkSerializer(many=True)

    class Meta:
        model = GroupChat
        fields = '__all__'


class GroupChatCreateSerializer(ModelSerializer):
    class Meta:
        model = GroupChat
        fields = '__all__'
    
    def create(self, validated_data):
        chat = GroupChat.objects.create(name=validated_data.pop("name"), icon=validated_data.pop("icon", None))
        users = validated_data.pop('users')
        for userId in users:
            chat.users.add(userId)
        return chat


class GroupChatDetailSerializer(ModelSerializer):
    users = UserLinkSerializer(many=True)
    messages = serializers.SerializerMethodField()

    class Meta:
        model = GroupChat
        fields = '__all__'
    
    def get_messages(self, chat: PrivateChat):
        return MessageSerializer(chat.messages, many=True, context={'request': self.context['request']}).data
