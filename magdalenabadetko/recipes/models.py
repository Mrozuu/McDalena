from django.contrib.postgres.fields import ArrayField
from django.db import models


class Recipe(models.Model):

    title = models.CharField(max_length=100)
    types = models.CharField(max_length=100)
    listOfElements = ArrayField(
        models.IntegerField(),
        size=20
    )


