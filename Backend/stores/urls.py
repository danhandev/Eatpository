


from django.contrib import admin
from django.urls import path,include
from stores import views
# urlpatterns = [
#     path('/stores?editor={{selected-editor}}&category={{selected-category}}', views.selected_stores, name = "selected"),
# ]

urlpatterns = [
    path('stores/',views.selected_stores, name = "signup"),
]


