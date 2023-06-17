import {useState, useEffect} from "react"
import { Recipe } from "src/types"
import { getAllRecipes } from "src/api/recipes"

export const useRecipies = () => {
  const [randomRecipes, setRandomRecipies] = useState<Recipe[]>([])
  const [randomRecipesLoading, setRandomRecipiesLoading] = useState<boolean>(false)

  useEffect(() => {
    handleGetRandomRecipies()
  }, [])

  const handleGetRandomRecipies = async () => {
    const res: {recipes: Recipe[]} = await getAllRecipes() 
    setRandomRecipiesLoading(true)

    setRandomRecipies(res.recipes)
  }

  return {
    randomRecipes,
    randomRecipesLoading
  }
}


