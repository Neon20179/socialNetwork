from django.urls import path
from .views import UserAPI, ProfileDetails


urlpatterns = [
    path('', UserAPI.as_view()),
    path('<int:pk>/', ProfileDetails.as_view())
]
