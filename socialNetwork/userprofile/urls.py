from django.urls import path
from .views import UserAPI


urlpatterns = [
    # path('<str:pk>/', v.as_view()),
    path('', UserAPI.as_view()),
]
