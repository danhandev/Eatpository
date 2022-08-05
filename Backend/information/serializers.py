from rest_framework import serializers
from accounts.models import Users


class InformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('user_id',  'nickname', 'user_num', 'emoji', 'user_information')