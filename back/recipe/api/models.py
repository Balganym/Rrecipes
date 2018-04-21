# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Category(models.Model):
  """
  """
  name = models.CharField(max_length=1000)
  link = models.CharField(max_length=1000, default="")
  image = models.CharField(max_length=1000, default="")

  def __str__(self):
    return str(self.id) + ' - ' + self.name

  def to_json(self):
    return{
      "id": self.id,
      "name": self.name,
      "link": self.link,
      "image": self.image,
    }

class Recipe(models.Model):
  """
  """
  category = models.ForeignKey(Category, on_delete=models.CASCADE,
    related_name="recipes")
  title = models.CharField(max_length=200)
  image = models.URLField(max_length=1000, null=True)
  portions = models.IntegerField(null=True, blank=True, default=0)
  tip = models.CharField(max_length=5000, null=True, blank=True)

  def __str__(self):
    return self.title

  def to_json(self):
    return {
      'id': self.id,
      'category': self.category.to_json(),
      'title': self.title,
      'image': self.image,
      'tip': self.tip,
      'ingredients': [cur.to_json() for cur in self.ingredients.all()],
      'accessories': [cur.name for cur in self.accessories.all()],
      'instructions': [cur.to_json() for cur in self.steps.all()],
      # 'duration': self.duration.to_json(),
      'portions': self.portions,
    }

class Ingredient(models.Model):
  """
  """
  recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, 
    related_name="ingredients")
  name = models.CharField(max_length=1000)
  amount = models.FloatField(null=True, blank=True)
  unit = models.CharField(max_length=200, null=True, blank=True)
  ingredient_custom_id = models.IntegerField(
    null=False, blank=False, default=0)

  def __str__(self):
    return self.name

  def to_json(self):
    return {
      'id': self.ingredient_custom_id,
      'name': self.name,
      'amount': self.amount,
      'unit': self.unit
    }

class Step(models.Model):
  """
  """
  recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE,
    related_name="steps")
  instruction = models.CharField(max_length=3000, null=True, blank=True)
  time_amount = models.IntegerField(null=True, blank=True)
  time_unit = models.CharField(max_length=200, null=True, blank=True)
  temperature = models.CharField(max_length=200, null=True, blank=True, 
    default="")
  step_custom_id = models.IntegerField(null=False, blank=False, default=0)

  def __str__(self):
    return self.instruction

  def to_json(self):
    return {
      'id': self.step_custom_id,
      'instruction': self.instruction,
      'time_amount': self.time_amount,
      'time_unit': self.time_unit,
      'temperature': self.temperature,
    }


class Accessory(models.Model):
  """
  """
  recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE,
    related_name="accessories")
  name = models.CharField(max_length=1000, null=False, blank=False)

  def __unicode__(self):
      return self.name


class Duration(models.Model):
  """
  """
  recipe = models.OneToOneField(Recipe, on_delete=models.CASCADE,
    related_name="duration")
  total_hour = models.IntegerField(null=False, blank=False, default=0)
  total_min = models.IntegerField(null=False, blank=False, default=0)
  preparation_hour = models.IntegerField(null=True, blank=True)
  preparation_min = models.IntegerField(null=True, blank=True)
  cooking_hour = models.IntegerField(null=True, blank=True)
  cooking_min = models.IntegerField(null=True, blank=True)

  def __unicode__(self):
    return "{0} {1} {2}".format(self.recipe.title, self.total_hour,
                                self.total_min)

  def to_json(self):
    return {
      'id': self.id,
      'total_hour': self.total_hour,
      'total_min': self.total_min,
      'preparation_hour': self.preparation_hour,
      'preparation_min': self.preparation_min,
      'cooking_hour': self.cooking_hour,
      'cooking_min': self.cooking_min,
    }



