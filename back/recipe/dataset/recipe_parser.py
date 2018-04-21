#!/usr/bin/python
import requests
from bs4 import BeautifulSoup
import json
import io
import re

MAIN_URL = 'http://thermomix-recipe.ru'
ALL_RECEPTS_URL = 'http://thermomix-recipe.ru/service/search'
RECEPT_URL = 'http://thermomix-recipe.ru/recepty/{0}'
CATEGORY_URL = 'http://thermomix-recipe.ru/service/search?fmi_category[]={0}'

NUMBER_OF_CATEGORIES = 15

DIV_NAME_ID = 'step-1-container'
DIV_CATEGORY_ID = 'step-2-container'
DIV_INGREDIENTS_ID = 'ingredient-blocks-wrapper-final'
DIV_TIMING_ID = 'step-6-container'
DIV_DIFFICULTY_ID = 'step-7-container'
DIV_EQUIPMENT_ID = 'step-8-container'
DIV_INSTRUCTIONS_ID = 'preparation-active-final'
DIV_ACCESSORIES_ID = 'accessoires-final'
DIV_TIP_ID = 'tip-final'
DIV_RECIPE_BUTTON_ID = 'overlaybuttonbox'
DIV_IMAGE_ID = 'image-slider-viewport'
SPAN_DIFFICULTY_ID = 'level-final'
SPAN_EQUIPMENT_ID = 'model-final'
SPAN_PORTION_ID = 'portion_text'
DIV_PORTIONS_ID = "portion-wrapper-final"

RECEIPT_JSON_KEYS = {
    DIV_NAME_ID: 'name',
    DIV_CATEGORY_ID: 'category',
    DIV_INGREDIENTS_ID: 'ingredients',
    DIV_TIMING_ID: 'timing',
    DIV_DIFFICULTY_ID: 'difficulty',
    DIV_EQUIPMENT_ID: 'equipment',
    DIV_INSTRUCTIONS_ID: 'instructions',
    DIV_ACCESSORIES_ID: 'accessories',
    DIV_TIP_ID: 'tip',
    DIV_IMAGE_ID: 'image',
    DIV_PORTIONS_ID: 'portions'
}

IDS_IN_TIMING = [
    'total-time-final',
    'preptime',
    'bakingtime'
]

def get_html(url):
    try:
        return requests.get(url).text
    except:
        return None

def get_info_from_div(soup, div_id):
    soup = soup.find('div', {'id': div_id})
    if div_id == DIV_CATEGORY_ID:
        return soup.find('a').get_text().strip()
    elif div_id == DIV_IMAGE_ID:
        return (MAIN_URL + soup.find('img').get('src'))
    elif div_id == DIV_INGREDIENTS_ID or div_id == DIV_INSTRUCTIONS_ID:
        chunks = []
        chunks_set = soup.find_all('p')
        for chunk in chunks_set:
            string = chunk.getText().strip()
            if string != '':
                if div_id == DIV_INSTRUCTIONS_ID:
                    chunks.append({"step": string, "time": 0, "temperature": "", "speed": "", "unit": ""})
                else:
                    chunks.append(string)
            # print(chunks)
            chunk = chunk.find_next('p')
        return chunks
    elif div_id == DIV_ACCESSORIES_ID:
        chunks = []
        chunks_set = soup.find_all('div')
        for chunk in chunks_set:
            string = chunk.getText().strip()
            if string != '':
                chunks.append(string)
            chunk = chunk.find_next('div')
        return chunks
    elif div_id == DIV_TIMING_ID:
        chunks = []
        for sub_id in IDS_IN_TIMING:
            string = soup.find(id=sub_id).getText().strip()
            string = " ".join(string.split())
            #string = string.replace('\n', '').replace('\t', '')
            chunks.append(string)
        return chunks
    elif div_id == DIV_DIFFICULTY_ID:
        return soup.find('span', {'id': SPAN_DIFFICULTY_ID}).getText().strip()
    elif div_id == DIV_EQUIPMENT_ID:
        return soup.find('span', {'id': SPAN_EQUIPMENT_ID}).getText().strip()
    elif div_id == DIV_PORTIONS_ID:
        return map(int, re.findall('\d+', soup.find('span', {'id': SPAN_PORTION_ID}).getText().strip()))[0]
    else:
        return soup.get_text().strip()

def get_image_url_from_div(soup, div_id):
    return MAIN_URL + soup.find('div', {'id': div_id}).find('img').get('src')

def get_full_info_by_id(receipt_id):
    url = RECEPT_URL.format(receipt_id)
    html_text = get_html(url)
    soup = BeautifulSoup(html_text, 'html.parser')
    data = {}
    for key, value in RECEIPT_JSON_KEYS.iteritems():
        received = get_info_from_div(soup, key)
        data[value] = received
    return data

def get_all_receipt_ids():
    result = []
    html_text = get_html(ALL_RECEPTS_URL)
    soup = BeautifulSoup(html_text, 'html.parser')
    divka = soup.find(id = DIV_RECIPE_BUTTON_ID)
    while(divka): 
        link = divka.find('a')
        id = map(int, re.findall('\d+', link.get('id')))[0]
        result.append(id)
        divka = divka.find_next(id = DIV_RECIPE_BUTTON_ID)
    return result

all_unique_recipes = get_all_receipt_ids()

def get_all_data():
    recipes = []
    for rec_id in all_unique_recipes:
        print(rec_id)
        recipes.append(get_full_info_by_id(rec_id))
    data = {}
    data['recipes'] = recipes
    return data
     
with io.open('json_file.json', 'w', encoding='utf-8') as outfile:
    outfile.write(json.dumps(get_all_data(), outfile, indent=4, ensure_ascii=False))