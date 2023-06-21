from django.http import HttpRequest, JsonResponse
from backend.models import GlobalIngredient, Recipe


def ingredients(request: HttpRequest) -> JsonResponse:
    return JsonResponse(
        {
            'ingredients': [
                {
                    'id': ingredient.id,
                    'name': ingredient.name
                } for ingredient in GlobalIngredient.objects.all()
            ]
        }
    )


def recipe_to_dict(recipe: Recipe) -> dict:
    return {
        'id': recipe.id,
        'name': recipe.name,
        'source': recipe.source,
        'prep_time': recipe.prep_time,
        'wait_time': recipe.wait_time,
        'cook_time': recipe.cook_time,
        'servings': recipe.servings,
        'comment': recipe.comment,
        'calories': recipe.calories,
        'fat': recipe.fat,
        'satfat': recipe.satfat,
        'carbs': recipe.carbs,
        'fiber': recipe.fiber,
        'sugar': recipe.sugar,
        'protein': recipe.protein,
        'instructions': recipe.instructions,
        'ingredients': [ingredient.name for ingredient in recipe.recipeingredient_set.all()],
        'tags': [tag.name for tag in recipe.tags.all()],
        'image': recipe.image.url if recipe.image else None
    }


def recipes(request: HttpRequest) -> JsonResponse:
    recipe_id = request.GET.get('id', None)
    if recipe_id:
        try:
            recipe = Recipe.objects.get(id=recipe_id)
            return JsonResponse({
                'recipe': recipe_to_dict(recipe)
            })
        except Recipe.DoesNotExist:
            return JsonResponse({}, status=404)

    selected_ingredient_ids = request.GET.getlist('ingredients[]', [])
    if selected_ingredient_ids:
        recipes = Recipe.objects.all()
        for ingredient_id in selected_ingredient_ids:
            recipes = recipes.filter(recipeingredient__global_ingredient__id=ingredient_id)

        recipes = recipes.distinct()
    else:
        recipes = Recipe.objects.exclude(image__exact='').order_by('?')[:10]

    return JsonResponse(
        {
            'recipes': [recipe_to_dict(recipe) for recipe in recipes]
        }
    )
