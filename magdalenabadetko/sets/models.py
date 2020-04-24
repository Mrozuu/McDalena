from django.contrib.postgres.fields import ArrayField
from django.db import models


class Set(models.Model):

    title = models.CharField(max_length=100)
    component = models.CharField(max_length=100)
    backgroundImage = models.CharField(max_length=100)
    backgroundColor = models.CharField(max_length=100)
    path = models.CharField(max_length=100)
    buttonPath = models.CharField(max_length=100)
    listOfRecipes = ArrayField(
        models.IntegerField(),
        size=20
    )

