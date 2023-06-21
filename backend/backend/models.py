from django.db import models


class RecipeTag(models.Model):
    class Meta:
        app_label = 'backend'
        verbose_name = 'Tag'
        verbose_name_plural = 'Tagi'

    name = models.CharField(
        max_length=255
    )


class Recipe(models.Model):
    class Meta:
        app_label = 'backend'
        verbose_name = 'Danie'
        verbose_name_plural = 'Dania'

    name = models.CharField(
        max_length=255
    )

    source = models.URLField(
        max_length=255
    )

    prep_time = models.PositiveIntegerField(
        verbose_name='Czas przygotowania',

    )

    wait_time = models.PositiveIntegerField(
        verbose_name='Czas oczekiwania'
    )

    cook_time = models.PositiveIntegerField(
        verbose_name='Czas gotowania'
    )

    servings = models.PositiveIntegerField(
        verbose_name='Porcje'
    )

    comment = models.TextField(
        verbose_name='Komentarz'
    )

    calories = models.PositiveIntegerField(
        verbose_name='Kalorie'
    )

    fat = models.PositiveIntegerField(
        verbose_name='Tłuszcz'
    )

    satfat = models.PositiveIntegerField(
        verbose_name='Tłuszcz nasycony'
    )

    carbs = models.PositiveIntegerField(
        verbose_name='Węglowodany'
    )

    fiber = models.PositiveIntegerField(
        verbose_name='Błonnik'
    )

    sugar = models.PositiveIntegerField(
        verbose_name='Cukier'
    )

    protein = models.PositiveIntegerField(
        verbose_name='Białko'
    )

    instructions = models.TextField(
        verbose_name='Instrukcje'
    )

    tags = models.ManyToManyField(
        RecipeTag,
        verbose_name='Tagi'
    )

    image = models.ImageField(
        verbose_name='Zdjęcie',
        upload_to='food_images/',
        null=True,
        blank=True,
        default=None
    )

    def __str__(self):
        return self.name


class GlobalIngredient(models.Model):
    class Meta:
        app_label = 'backend'
        verbose_name = 'Globalny składnik'
        verbose_name_plural = 'Globalne składniki'

    name = models.CharField(
        max_length=255
    )


class RecipeIngredient(models.Model):
    class Meta:
        app_label = 'backend'
        verbose_name = 'Składnik'
        verbose_name_plural = 'Składniki'

    recipe = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE
    )

    name = models.CharField(
        max_length=255
    )

    global_ingredient = models.ForeignKey(
        GlobalIngredient,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        default=None
    )
