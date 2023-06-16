import { useState, useEffect } from "react"
import{ getAllIngredients } from '../api/ingredients'

import { Ingredient } from "src/types"

export const useIngredients = () => {
  const [loadingIngredients, setLoadingIngredients] = useState<boolean>(false)
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [selectedIngredients, setSelectedIngredients] = useState<number[]>([])

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

  return {
    toggleIngredients,
    handleGetAllIngredients,
    ingredients,
    loadingIngredients,
    selectedIngredients
  }
}