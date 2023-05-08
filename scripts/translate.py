# import file recipes_raw_en.json
# its json file with recipes
# translate it to polish
# save it to recipes_raw_pl.json
# use google translate api
# https://cloud.google.com/translate/docs/basic/setup-basic
# https://cloud.google.com/translate/docs/basic/translating-text#translate_translate_text-python

import json
import os
import googletrans
from googletrans import Translator
from multiprocessing.dummy import Pool as ThreadPool
from multiprocessing import Manager

translator = Translator()

# load json file
with open('recipes_raw_en.json') as json_file:
    all_recipes = json.load(json_file)
recipies_list = [elem for i, (key, elem) in enumerate(all_recipes.items())]

# init queue thats shared beetween workers
# To mi niestety nie zadziałało. Chcialem miec status przetłumaczonych przepisów, ale nie wiem jak to zrobić.
# manager = Manager()
# recipes_queue = manager.Queue(recipies_list)
# for elem in recipies_list:
#     recipes_queue.put_nowait(elem)

# translate data multithread
pool = ThreadPool(8)

# worker
def request(recipe):
    try:
        recipe['name'] = translator.translate(recipe['name'], dest='pl').text
        recipe['comments'] = translator.translate(recipe['comments'], dest='pl').text
        recipe['ingredients'] = [translator.translate(ingredient, dest='pl').text for ingredient in recipe['ingredients']]
        recipe['instructions'] = translator.translate(recipe['instructions'], dest='pl').text
        recipe['tags'] = [translator.translate(tag, dest='pl').text for tag in recipe['tags']]
        # print("Przetłumaczono przepis nr: " + recipe['id'])
    except Exception as e:
        # print("Nie udało się przetłumaczyć przepisu nr: " + recipe['id'] + " Blad:" + str(e))
        return None
    return recipe

# try:
results = pool.map_async(request, recipies_list)
# except Exception as e:
#     print(e)

pool.close()
pool.join()

filtered_results = filtered = [i for i in results.get() if i is not None]

# save data to json file
with open('recipes_raw_pl.json', 'w') as outfile:
    json.dump(filtered_results, outfile, ensure_ascii=False, indent=4)