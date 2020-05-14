from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.

class Instruction(models.Model):
    name = models.CharField(max_length=100)
    ingredients = ArrayField(
        models.CharField(max_length=500),
        size=30
    )
    preparation = models.CharField(max_length=5000)
