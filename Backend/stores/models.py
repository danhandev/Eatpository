from django.db import models
from django.db import models
from accounts.models import Users

class Stores(models.Model):
    store_name = models.CharField(max_length=100, null= False)
    main_menu = models.CharField(max_length=100, null=True)
    address = models.CharField(max_length=100, null=True)
    #coordinate = models.PointField(blank=False, null=True)
    longitude = models.FloatField(null=True,blank=True) # 경도
    latitude = models.FloatField(null=True,blank=True) # 위도
    time = models.CharField(max_length=200, null=True)
    phone_number = models.CharField(max_length=50, null=True)
    image = models.CharField(max_length=100, null=True,blank=True)
    user = models.ForeignKey(Users, on_delete=models.CASCADE,null=True)
    category = models.CharField(max_length = 10, null = False)
    def __str__(self) -> str:
        return self.store_name
        
class Recommends(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE) # 사용자 Foreign Key
    store = models.ForeignKey(Stores, on_delete=models.CASCADE) # 식당 Foreign Key
    title = models.CharField(max_length=100, null=True) # 소개글 제목
    detail = models.CharField(max_length=500, null=True) # 소개글

class Menus(models.Model):
    store = models.ForeignKey(Stores, on_delete=models.CASCADE) # 식당 Foreign Key
    food_name = models.CharField(max_length=100, null=True) # 음식이름
    price = models.IntegerField() # 음식가격
