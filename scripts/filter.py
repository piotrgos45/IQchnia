# count number of items from recipes_raw_en.json
import json

with open('recipes_raw_en.json') as json_file:
    all_recipes = json.load(json_file)
recipies_list = [elem for i, (key, elem) in enumerate(all_recipes.items())]

print("Number of items in recipes_raw_en.json: " + str(len(recipies_list)))

# number of elements in recipes_raw_pl.json
with open('recipes_raw_pl.json') as json_file:
    pl_recipes = json.load(json_file)

filtered = [i for i in pl_recipes if i is not None]
print("Number of items in recipes_raw_pl.json: " + str(len(filtered)))
