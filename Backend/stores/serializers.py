from rest_framework import serializers
from .models import Stores

class StoreSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Stores
        fields = ('id','store_name' , 'main_menu', 'longitude', 'latitude', 'user')

class StoreRandomSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Stores 

class Stores_Information(serializers.ModelSerializer):
    class Meta:
        model = Stores
        fields = "__all__"