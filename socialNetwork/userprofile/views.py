from rest_framework import generics, permissions, views
from rest_framework.response import Response 
from .models import User
from .serializers import UserSerializer


class ProfileList(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated, )


class UserAPI(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format='json'):
        serialized_user = UserSerializer(request.user)
        return Response(serialized_user.data)
