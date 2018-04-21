# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-04-20 21:44
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20180421_0257'),
    ]

    operations = [
        migrations.CreateModel(
            name='Accessory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=1000)),
                ('recipe', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Recipe')),
            ],
        ),
        migrations.CreateModel(
            name='Duration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_hour', models.IntegerField(default=0)),
                ('total_min', models.IntegerField(default=0)),
                ('preparation_hour', models.IntegerField(blank=True, null=True)),
                ('preparation_min', models.IntegerField(blank=True, null=True)),
                ('cooking_hour', models.IntegerField(blank=True, null=True)),
                ('cooking_min', models.IntegerField(blank=True, null=True)),
                ('recipe', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.Recipe')),
            ],
        ),
    ]
