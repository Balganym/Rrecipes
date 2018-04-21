# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import os
import json
import io
import re
from django.conf import settings

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files import File

from .models import Category, Recipe, Ingredient, Step, Accessory, Duration

def get_step_info(text):
  text = ' '.join(text.split())
  pattern = re.compile(ur'^([a-zA-Zа-яА-Я\(\)\.,\%\-\:]*[ [a-zA-Zа-яА-Я\(\)\.,\%\-\:]*]*)(?: (\d+(\.\d+)?) ([a-zA-Zа-яА-Я\(\)\.,\%\-\:]*[ [a-zA-Zа-яА-Я\(\)\.,\%\-\:]*]*))?$', re.U)
  match = pattern.match(text)
  return match.group(1), match.group(2), match.group(4)

@csrf_exempt
def upload_recipes_from_json(request):
  """
  """
  try:
    Recipe.objects.all().delete()
    Category.objects.all().delete()
    Ingredient.objects.all().delete()
    Accessory.objects.all().delete()
    Duration.objects.all().delete()
    Step.objects.all().delete()
    dataset = "dataset/recipes.json"

    DATASET_JSON = os.path.join(settings.BASE_DIR, dataset)
    
    with open(DATASET_JSON) as data_file:
        data = json.load(data_file)

    if data_file.closed == False:
        data_file.close()

    recipes = data["recipes"]
    for recipe in recipes:
      category_name = recipe["category"]["name"]
      link_name = category_name.lower()
      link_name = link_name.replace(" ", "")
      category_color = recipe["category"]["color"]
      category_language = recipe["category"]["language"]
      category_free = recipe["category"]["free"]
      title = recipe["name"]
      image = recipe["image"]
      tip = recipe["tip"]
      portions = recipe["portions"]
      ingredients = recipe["ingredients"]
      accessories = recipe["accessories"]
      instructions = recipe["instructions"]
      category_obj, message = Category.objects.get_or_create(
        name=category_name, image="", link=link_name)

      r, _ = Recipe.objects.get_or_create(category=category_obj,
        title=title, image=image,
        tip=tip, portions=portions)
      r.save()
      
      cnt = 0

      for ingredient in ingredients:
        cnt += 1

        name = ingredient

        ingredient_db, is_created = Ingredient.objects.get_or_create(
          name=name,
          ingredient_custom_id=cnt,
          recipe=r)
      
      for accessory in accessories:
        accessory_db, is_created = Accessory.objects.get_or_create(
          name=accessory, recipe=r)

      cnt = 0

      for instruction in instructions:
        cnt += 1
        time = None
        temp = None
        speed = None
        unit = None
        if instruction["time"] is not 0:
            time = instruction["time"]
        if instruction["speed"]:
            speed = instruction["speed"]
        if instruction["temperature"] :
            temp = instruction["temperature"]
        if instruction["unit"] :
            unit = instruction["unit"]
        instruction_db, is_created = Step.objects.get_or_create(
          instruction=instruction["step"], time_unit=unit,
          time_amount=time, temperature=temp,
          step_custom_id=cnt, recipe=r)
        
        timing = recipe["timing"]
        total_hour = timing["total_hour"]
        total_min = timing["total_min"]
        preparation_hour = timing["preparation_hour"]
        preparation_min = timing["preparation_min"]
        cooking_hour = timing["cooking_hour"]
        cooking_min = timing["cooking_min"]
        d, _ = Duration.objects.get_or_create(recipe=r,
          total_hour=total_hour, total_min=total_min,
          preparation_hour=preparation_hour,
          preparation_min=preparation_min,
          cooking_hour=cooking_hour,
          cooking_min=cooking_min)
    return JsonResponse({"status": "ok"}, safe=False)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)


@csrf_exempt
def recipes(request):
  """
  """
  if request.method == "GET":
    recipes = Recipe.objects.all()
    res = [recipe.to_json() for recipe in recipes]
    return JsonResponse(res, safe=False)


@csrf_exempt
def category(request, cat_name):
  """
  """
  if request.method == "GET":
    current_category = Category.objects.get(link=cat_name)
    recipes = Recipe.objects.filter(category=current_category)
    res = [recipe.to_json() for recipe in recipes]
    return JsonResponse(res, safe=False)

@csrf_exempt
def categories(request):
  """
  """
  if request.method == "GET":
    cats = Category.objects.all()
    res = [cat.to_json() for cat in cats]
    return JsonResponse(res, safe=False)


