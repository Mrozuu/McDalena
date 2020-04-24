from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('sets.urls')),
    path('', include('recipes.urls')),
]
