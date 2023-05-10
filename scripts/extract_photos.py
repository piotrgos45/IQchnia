# this script is for extracting photos from the reciepies dataset
# and saving them in a new folder. Some objects have links to photos
import urllib3
from bs4 import BeautifulSoup
import json

http = urllib3.PoolManager()

def is_string_url(string):
    return string.startswith("http")

def extract_photo_url(recipe_url):
    webpage = http.request("GET", recipe_url)
    soup = BeautifulSoup(webpage.data, "html.parser")
    result = soup.find("meta", property="og:image")
    return result["content"] if result else ""

def parse_recipe(recipe):
    if not is_string_url(recipe["source"]):
        recipe["photo"] = ""
        return recipe

    # extract food photo from the recipe url
    photo_url = extract_photo_url(recipe["source"])

    if not photo_url:
        recipe["photo"] = ""
        return recipe

    # is photo url found
    # download image, put to the assets folder
    original_filename = photo_url.split("/")[-1]

    filename = recipe["id"]+"_"+original_filename
    with open("assets/" + filename, "wb") as f:
        # try to download image
        photo = http.request("GET", photo_url).data
        f.write(photo)
    recipe["photo"] = 'assets/' + filename
    return recipe


if __name__ == "__main__":
    # otwieramy juz przetlumaczony plik
    with open("recipes_raw_pl.json") as json_file:
        recipies_pl_list = json.load(json_file)
    
    recipies_with_photos = []
    
    for recipe in recipies_pl_list:
        try:
            parsed_recipe = parse_recipe(recipe)
        except Exception as e:
            print("Nie udało się pobrać zdjęcia przepisu nr: " + recipe['id'] + " Blad:" + str(e))
            parsed_recipe = recipe
            parsed_recipe["photo"] = ""
        recipies_with_photos.append(parsed_recipe)
    
    with open("recipes_pl_with_photos.json", "w") as outfile:
        json.dump(recipies_with_photos, outfile, ensure_ascii=False, indent=4)
