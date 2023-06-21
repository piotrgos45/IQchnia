import { useEffect } from 'react'
import SideBar from 'src/components/SideBar'
import RecipesList from 'src/components/RecipesList'

import { useIngredients } from "src/hooks/useIngredients"
import { useRecipies } from 'src/hooks/useRecipes'



const MainPage = () => {
  const { toggleIngredients, selectedIngredients, handleSearch, ingredientsList } = useIngredients()
  const { recipeList, recipeListLoading, getRecipeByIngredient} = useRecipies()

  useEffect(() => {
    getRecipeByIngredient(selectedIngredients)
  }, [selectedIngredients])

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