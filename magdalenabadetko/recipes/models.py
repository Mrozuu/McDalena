from django.contrib.postgres.fields import ArrayField
from django.db import models


class Recipe(models.Model):

    title = models.CharField(max_length=100)
    types = models.CharField(max_length=100)
    ingredients = ArrayField(
        ArrayField(
            models.CharField(max_length=100),
            size=30),
        size=10
    )
    preparation = ArrayField(
        ArrayField(
            models.CharField(max_length=5000),
            size=2),
        size=10
    )


