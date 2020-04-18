from django.contrib.postgres.fields import ArrayField
from django.db import models


class Set(models.Model):

    path = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    Component = models.CharField(max_length=100)
    backgroundColor = models.CharField(max_length=100)
    contentTitle = models.CharField(max_length=100)
    buttonPath = models.CharField(max_length=100)
    backgroundImage = models.CharField(max_length=100)

    #title = models.CharField(max_length=200)
    #description = models.CharField(max_length=1000)
    #list_of_recipes = ArrayField(
    #    models.CharField(max_length=200),
    #    size=20
    #)
    #preperation_time = models.IntegerField()
    #picture = models.CharField(max_length=200)


