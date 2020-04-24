# Generated by Django 3.0.5 on 2020-04-24 18:52

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Set',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('component', models.CharField(max_length=100)),
                ('backgroundImage', models.CharField(max_length=100)),
                ('backgroundColor', models.CharField(max_length=100)),
                ('path', models.CharField(max_length=100)),
                ('buttonPath', models.CharField(max_length=100)),
                ('listOfRecipes', django.contrib.postgres.fields.ArrayField(base_field=models.IntegerField(), size=20)),
            ],
        ),
    ]
