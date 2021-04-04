from django.db import models
from django.contrib.auth.models import AbstractUser
from .utils import _get_upload_path


SEX_CHOICES = [
    ("M", "Male"),
    ("F", "Female"),
    ("N", "Not indicated"),
]


LANG_CHOICES = [
    ("EN", "English"),
    ("RU", "Русский"),
]


class User(AbstractUser):
    sex = models.CharField(max_length=15, choices=SEX_CHOICES, default="N")
    lang = models.CharField(max_length=15, choices=LANG_CHOICES, default="EN")
    avatar_image = models.ImageField(upload_to=_get_upload_path, blank=True, null=True)
    header_image = models.ImageField(upload_to=_get_upload_path, blank=True, null=True)
    bio = models.TextField(max_length=3000, blank=True, null=True)


class UserImage(models.Model):
    user = models.ForeignKey(User, related_name='user_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=_get_upload_path)
