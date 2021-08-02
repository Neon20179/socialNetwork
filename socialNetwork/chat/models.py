from django.core.exceptions import ValidationError
from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from userprofile.models import User
from friends.models import Friend
    

class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey()


class PrivateChat(models.Model):
    user1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user1_private_chats")
    user2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user2_private_chats")
    messages = GenericRelation(Message)


class GroupChatManager(models.Manager):
    def add_to_chat(self, added_user_id: int, chat_id: int, user: User):
        added_user = User.objects.get(id=added_user_id)
        chat = self.get(id=chat_id)
        if not Friend.objects.are_friends(user1=user.id, user2=added_user_id):
            raise ValidationError("Users are not friends")
        chat.users.add(added_user)


class GroupChat(models.Model):
    name = models.CharField(max_length=255)
    icon = models.ImageField(blank=True, null=True)
    users = models.ManyToManyField(User)
    
    messages = GenericRelation(Message)

    objects = GroupChatManager()
