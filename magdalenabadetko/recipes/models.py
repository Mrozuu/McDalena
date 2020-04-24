from django.contrib.postgres.fields import ArrayField
from django.db import models


class Recipe(models.Model):

    title = models.CharField(max_length=100)
    description = models.CharField(max_length=2000)
    types = models.CharField(max_length=100)
    picture = models.CharField(max_length=200)
    ingredients = ArrayField(
        models.CharField(max_length=100),
        size=30
    )
    preparation = ArrayField(
        models.CharField(max_length=200),
        size=30
    ) 


