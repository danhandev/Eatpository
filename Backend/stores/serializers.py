from rest_framework import serializers
from .models import Stores

class Stores_Information(serializers.ModelSerializer):
    class Meta:
        model = Stores
        fields = "__all__"