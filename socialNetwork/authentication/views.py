from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSignUpSerializer


class SignUp(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    
    def post(self, request, format="json"):
        serialized_user_data = UserSignUpSerializer(data=request.data)
        if serialized_user_data.is_valid():
            user = serialized_user_data.save()
            if user:
                return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class Logout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format="json"):
        try:
            token = RefreshToken(request.data["refresh_token"])
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as ex:
            print(ex)
            return Response(status.HTTP_400_BAD_REQUEST)
