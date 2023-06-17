import SideBar from 'src/components/SideBar'
import RecipesList from 'src/components/RecipesList'

import { useIngredients } from "src/hooks/useIngredients"
import { useRecipies } from 'src/hooks/useRecipes'



const MainPage = () => {
  const { ingredients, toggleIngredients, selectedIngredients, handleSearch, ingredientsList } = useIngredients()
  const {randomRecipes, randomRecipesLoading} = useRecipies()

  return (
    <div className='grid grid-cols-4 gap-4'>
      <SideBar 
        ingredients={ingredientsList()} 
        toggleIngredients={toggleIngredients} 
        selectedIngredients={selectedIngredients} 
        handleSearch={handleSearch}
      />
      <RecipesList 
        recipesList={randomRecipes}
      />
    </div>
  )
}

export default MainPage