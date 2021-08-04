from django.contrib import admin
from chat.models import PrivateChat, GroupChat, Message

admin.site.register(PrivateChat)
admin.site.register(GroupChat)
admin.site.register(Message)
