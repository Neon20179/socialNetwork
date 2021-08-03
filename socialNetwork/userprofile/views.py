from rest_framework import generics, permissions, status, views
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from core.serializers import UserLinkSerializer
from core.utils import catch_unexpected_error
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


@permission_classes((permissions.IsAuthenticated, ))
@api_view(["GET"])
@catch_unexpected_error
def find_user(request):
    users = User.objects.filter(username__contains=request.query_params.get('search'))[:10]
    serialized_users = UserLinkSerializer(users, many=True)
    return Response(serialized_users.data, status=status.HTTP_200_OK)
