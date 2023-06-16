import SideBar from 'src/components/SideBar'
import RecipiesList from 'src/components/RecipiesList'

import { useIngredients } from "src/hooks/useIngredients"
import { useRecipies } from 'src/hooks/useRecipies'



const MainPage = () => {
  const { ingredients, toggleIngredients, selectedIngredients, handleSearch, ingredientsList } = useIngredients()
  const {} = useRecipies()

  return (
    <div className='grid grid-cols-4 gap-4'>
      <SideBar 
        ingredients={ingredientsList()} 
        toggleIngredients={toggleIngredients} 
        selectedIngredients={selectedIngredients} 
        handleSearch={handleSearch}
      />
      <RecipiesList />
    </div>
  )
}

export default MainPage