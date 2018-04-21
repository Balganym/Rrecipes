from django.conf.urls import url

from . import views


urlpatterns = [
  url(r'^upload_recipes/$', views.upload_recipes_from_json,
    name='upload_recipes_from_json'),
  url(r'^recipes/$', views.recipes, name='recipes'),
  url(r'^recipes/(?P<cat_name>[\w\-]+)/$', views.category, name='category'),
  url(r'^categories/', views.categories, name='categories'),
]