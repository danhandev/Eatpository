from django.contrib import admin
from django.urls import path,include
from stores import views
from stores import views

urlpatterns = [
    path('stores/',views.selected_stores, name = "signup"),
    path('selected/',views.selected_stores, name = "selected"),
    path('<int:store_id>/',views.stores_information, name="information"),
]