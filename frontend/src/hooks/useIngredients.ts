import { useState, useEffect, useCallback } from "react"
import{ getAllIngredients } from '../api/ingredients'

import { Ingredient } from "src/types"

export const useIngredients = () => {
  const [loadingIngredients, setLoadingIngredients] = useState<boolean>(false)
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [selectedIngredients, setSelectedIngredients] = useState<number[]>([])

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    handleGetAllIngredients()
  }, [])

  const handleGetAllIngredients = async () => {
    setLoadingIngredients(true)

    const res: { ingredients: Ingredient[] } = await getAllIngredients()

    setIngredients(res.ingredients)
    setLoadingIngredients(true)
  }

  const toggleIngredients = (id: number) => {
    if (selectedIngredients.includes(id)) {
      setSelectedIngredients((oldArray) => oldArray.filter((idEle) => idEle !== id))
    } else {
      setSelectedIngredients((oldArray) => [...oldArray, id])
    }
  }

  const handleSearch = (value: string) => {
    setSearchValue(value)
  }

  const ingredientsList = () => {
    if(searchValue === '') {
      return ingredients
    } else {
      return ingredients.filter((ingredient) => ingredient.name.includes(searchValue))
    }
  }

  return {
    toggleIngredients,
    handleGetAllIngredients,
    ingredients,
    loadingIngredients,
    selectedIngredients,
    handleSearch,
    ingredientsList
  }
}