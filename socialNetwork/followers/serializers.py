from rest_framework import serializers


class QuantitySerializer(serializers.Serializer):
    quantity = serializers.IntegerField()
