import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import SideBar from 'src/components/SideBar'
import RecipesList from 'src/components/RecipesList'

import { useIngredients } from "src/hooks/useIngredients"
import { useRecipies } from 'src/hooks/useRecipes'



const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { toggleIngredients, selectedIngredients, handleSearch, ingredientsList, setSelectedIngredients } = useIngredients()
  const { recipeList, recipeListLoading, getRecipeByIngredient, handleGetRandomRecipies} = useRecipies()

  useEffect(() => {
    if (selectedIngredients.length > 0) {
      getRecipeByIngredient(selectedIngredients)
      setSearchParams({['ingredient']: selectedIngredients.toString()})
    }
  }, [selectedIngredients])

  useEffect(() => {
    const ingredientsParams = searchParams.get('ingredient')
    if(ingredientsParams === null) {
      handleGetRandomRecipies()
    } else {
      const ingNumber = ingredientsParams.split(',')?.map((num) => Number(num))
      setSelectedIngredients(ingNumber)
    }
  }, [])


  return (
    <div className='
      flex flex-col gap-4 font-roboto 
      md:grid md:grid-cols-4
    '>
      <SideBar 
        ingredients={ingredientsList()}
        toggleIngredients={toggleIngredients} 
        selectedIngredients={selectedIngredients} 
        handleSearch={handleSearch}
      />
      <RecipesList 
        recipesList={recipeList()}
        loadingState={recipeListLoading()}
      />
    </div>
  )
}

export default MainPage