from django.contrib.postgres.fields import ArrayField
from django.db import models


class Set(models.Model):

    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    list_of_recipes = ArrayField(
        models.CharField(max_length=200),
        size=20
    )
    preperation_time = models.IntegerField()
    picture = models.CharField(max_length=200)



