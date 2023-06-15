import { useState } from "react"
import{ getAllIngredients } from '../api/ingredients'

import { Ingredient } from "src/types"

export const useIngredients = () => {
  const [loadingIngredients, setLoadingIngredients] = useState<boolean>(false)
  const [ingredients, setIngredients] = useState<Ingredient[] | []>([])

  const handleGetAllIngredients = async () => {
    setLoadingIngredients(true)
    const res: Ingredient[] = await getAllIngredients()
    setIngredients(res)
    setLoadingIngredients(true)
  }

  return {
    getAllIngredients,
    ingredients,
    loadingIngredients
  }
}