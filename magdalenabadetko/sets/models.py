from django.contrib.postgres.fields import ArrayField
from django.db import models


class Set(models.Model):

    title = models.CharField(max_length=100)
    titleExtension = models.CharField(max_length=500)
    description = models.CharField(max_length=5000)
    color = models.CharField(max_length=10)
    numberOfPeople = models.IntegerField()
    listOfRecipes = ArrayField(
        models.IntegerField(),
        size=20
    )

