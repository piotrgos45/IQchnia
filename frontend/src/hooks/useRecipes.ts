import {useState, useEffect} from "react"

import { Recipe } from "src/types"
import { getAllRecipes, getRecipeById, getRecipeByIngredientIds } from "src/api/recipes"

import { isEmpty } from 'lodash'

export const useRecipies = (selectedIngredients: number[] = []) => {
  const [randomRecipes, setRandomRecipies] = useState<Recipe[]>([])
  const [randomRecipesLoading, setRandomRecipiesLoading] = useState<boolean>(false)

  const [singleRecipie, setSingleRecipie] = useState<Recipe | undefined>(undefined)

  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    handleGetRandomRecipies()
  }, [])

  const handleGetRandomRecipies = async () => {
    const res: {recipes: Recipe[]} = await getAllRecipes() 
    setRandomRecipiesLoading(true)

    setRandomRecipies(res.recipes)
  }

  const getSingleRecipie = async (id: string) => {
    const res: { recipe: Recipe} = await getRecipeById(id)
    setSingleRecipie(res.recipe)
  }

  useEffect(() => {
    getRecipeByIngredient(selectedIngredients)
  }, [selectedIngredients])

  const getRecipeByIngredient = async (id: number[]) => {
    const res: {recipes: Recipe[]} = await getRecipeByIngredientIds(id) 

    setRecipes(res.recipes)
  }

  const recipeList = () => {
    if(isEmpty(recipes)) {
      return randomRecipes
    } else {
      return recipes
    }
  }

  return {
    getRecipeById,
    getSingleRecipie,
    randomRecipes,
    randomRecipesLoading,
    recipeList,
    singleRecipie
  }
}


