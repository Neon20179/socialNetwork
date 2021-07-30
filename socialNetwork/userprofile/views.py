from rest_framework import generics, permissions, status, views
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer, OtherUserSerializer


class ProfileDetails(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = OtherUserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_serializer_context(self):
        return {"user_id": self.request.user.id}


class UserAPI(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user = User.objects.get(id=request.user.id)
        serialized_user = UserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)
