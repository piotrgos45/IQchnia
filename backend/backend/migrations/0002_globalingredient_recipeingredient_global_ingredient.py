# Generated by Django 4.2.1 on 2023-06-14 19:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("backend", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="GlobalIngredient",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
            ],
            options={
                "verbose_name": "Składnik",
                "verbose_name_plural": "Składniki",
            },
        ),
        migrations.AddField(
            model_name="recipeingredient",
            name="global_ingredient",
            field=models.ForeignKey(
                blank=True,
                default=None,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="backend.globalingredient",
            ),
        ),
    ]