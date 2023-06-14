# this script is for extracting photos from the reciepies dataset
# and saving them in a new folder. Some objects have links to photos
import urllib3
from bs4 import BeautifulSoup
import uuid
import json

http = urllib3.PoolManager()

def is_string_url(string):
    return string.startswith("http")

def extract_photo_url(recipe_url):
    webpage = http.request("GET", recipe_url)
    soup = BeautifulSoup(webpage.data, "html.parser")
    result = soup.find("meta", property="og:image")
    return result["content"] if result else ""

signatures = {
    b'\xff\xd8\xff\xe0': 'jpg',
    b'\x89PNG\r\n\x1a\n': 'png',
    b'\x00\x00\x01\x00': 'ico',
    b'GIF87a': 'gif',
    b'GIF89a': 'gif',
    b'\x00\x00\x02\x00': 'tiff',
    b'BM': 'bmp',
    b'\x00\x00\x00\x0c': 'webp'
}

def parse_recipe(recipe):
    if not is_string_url(recipe["source"]):
        recipe["photo"] = ""
        return recipe

    # extract food photo from the recipe url
    photo_url = extract_photo_url(recipe["source"])

    if not photo_url:
        recipe["photo"] = ""
        return recipe

    photo = http.request("GET", photo_url).data

    # from photo metadata extract the file extension
    # if no extension found, assume it is jpg
    extension = signatures.get(photo[:4])

    if not extension:
        recipe["photo"] = ""
        return recipe

    # is photo url found
    # download image, put to the assets folder
    filename = str(uuid.uuid4()) + "." + extension
    with open("assets/" + filename, "wb") as f:
        # try to download image
        f.write(photo)
    recipe["photo"] = 'assets/' + filename
    return recipe


if __name__ == "__main__":
    # otwieramy juz przetlumaczony plik
    with open("recipes_raw_pl.json") as json_file:
        recipies_pl_list = json.load(json_file)
    
    recipies_with_photos = []

    all_num = len(recipies_pl_list)

    for ite, recipe in enumerate(recipies_pl_list):
        try:
            parsed_recipe = parse_recipe(recipe)
        except Exception as e:
            print("Nie udało się pobrać zdjęcia przepisu nr: " + recipe['id'] + " Blad:" + str(e))
            parsed_recipe = recipe
            parsed_recipe["photo"] = ""
        recipies_with_photos.append(parsed_recipe)
        print("Krok "+str(ite)+"/"+str(all_num)+" wykonany")
    
    with open("recipes_pl_with_photos.json", "w") as outfile:
        json.dump(recipies_with_photos, outfile, ensure_ascii=False, indent=4)
