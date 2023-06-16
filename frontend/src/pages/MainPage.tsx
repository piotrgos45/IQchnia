import SideBar from 'src/components/SideBar'
import RecipiesList from 'src/components/RecipiesList'

import { useIngredients } from "src/hooks/useIngredients"
import { useRecipies } from 'src/hooks/useRecipies'



const MainPage = () => {
  const { ingredients, toggleIngredients, selectedIngredients } = useIngredients()
  const {} = useRecipies()

  return (
    <div className='grid grid-cols-4 gap-4'>
      <SideBar ingredients={ingredients} toggleIngredients={toggleIngredients} selectedIngredients={selectedIngredients}/>
      <RecipiesList />
    </div>
  )
}

export default MainPage