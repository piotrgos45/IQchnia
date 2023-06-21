from backend.models import Recipe, RecipeIngredient, GlobalIngredient, RecipeTag
from django.core.management.base import BaseCommand
from django.db import transaction
import json
from tqdm import tqdm
import os
from django.conf import settings


class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        Recipe.objects.all().delete()
        GlobalIngredient.objects.all().delete()

        with open('../scripts/recipes_pl_with_photos.json', encoding='utf-8') as f:
            data = json.load(f)

            with transaction.atomic():
                for recipe in tqdm(data):
                    recipe_obj = Recipe.objects.create(
                        name=recipe['name'],
                        source=recipe['source'],
                        prep_time=recipe['preptime'],
                        wait_time=recipe['waittime'],
                        cook_time=recipe['cooktime'],
                        servings=recipe['servings'],
                        comment=recipe['comments'],
                        calories=recipe['calories'],
                        fat=recipe['fat'],
                        satfat=recipe['satfat'],
                        carbs=recipe['carbs'],
                        fiber=recipe['fiber'],
                        sugar=recipe['sugar'],
                        protein=recipe['protein'],
                        instructions=recipe['instructions']
                    )

                    if recipe['photo']:
                        recipe_obj.image = os.path.join(settings.STATIC_URL, os.path.basename(recipe['photo']))
                        recipe_obj.save()

                    for ingredient in set(recipe['ingredients']):
                        RecipeIngredient.objects.create(
                            recipe=recipe_obj,
                            name=ingredient
                        )

                    for tag in set(recipe['tags']):
                        recipe_obj.tags.add(
                            RecipeTag.objects.get_or_create(name=tag)[0]
                        )

        INGREDIENT_FIXTURES = {
            'mąka': ['mąk'],
            'jajka': ['jajk'],
            'mleko': ['mlek'],
            'cukier': ['cukie', 'cukr'],
            'masło': ['masł'],
            'olej': ['olej'],
            'woda': ['wod'],
            'sól': ['sól', 'sol'],
            'pieprz': ['pieprz'],
            'miód': ['miód', 'miod'],
            'oliwka': ['oliw'],
            'śmietana': ['śmietan'],
            'czekolada': ['czeko'],
        }

        global_ingredients = [GlobalIngredient(name=fixture) for fixture in INGREDIENT_FIXTURES.keys()]
        GlobalIngredient.objects.bulk_create(global_ingredients)

        for fixture, variants in INGREDIENT_FIXTURES.items():
            regex = '|'.join(variants)
            RecipeIngredient.objects.filter(name__iregex=regex).update(
                global_ingredient=GlobalIngredient.objects.get(name=fixture)
            )
