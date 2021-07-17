from functools import wraps
from django.db import transaction
from rest_framework.status import HTTP_400_BAD_REQUEST
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from .serializers import ExceptionSerializer


def create_exception_message(exception: Exception) -> Serializer:
    return ExceptionSerializer({"error_message": str(exception)})


def catch_unexpected_error(function):
    @wraps(function)
    def wrapper(request, *args, **kwargs):
        try:
            with transaction.atomic():
                return function(request, *args, **kwargs)
        except Exception as ex:
            exception = create_exception_message(ex)
            return Response(exception.data, status=HTTP_400_BAD_REQUEST)

    return wrapper

















