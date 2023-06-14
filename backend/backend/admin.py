from backend.models import GlobalIngredient, Recipe, RecipeIngredient, RecipeTag
from django.contrib import admin


@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'prep_time', 'wait_time', 'cook_time', 'servings', 'comment')


@admin.register(RecipeIngredient)
class RecipeIngredientAdmin(admin.ModelAdmin):
    list_display = ('id', 'recipe', 'name')


@admin.register(RecipeTag)
class RecipeTagAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


@admin.register(GlobalIngredient)
class GlobalIngredientAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')