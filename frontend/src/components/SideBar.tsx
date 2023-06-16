import IngredientButton from './IngredientButton'
import IngredientsSearch from './IngredientsSearch'

import { Ingredient }  from 'src/types'

interface ISideBar {
  toggleIngredients: (id: number) => void,
  handleSearch: (value: string) => void
  ingredients: Ingredient[],
  selectedIngredients: number[]
}

const SideBar: React.FC<ISideBar> = ({ toggleIngredients, ingredients, selectedIngredients, handleSearch }) => {


  const activeIngredientButton = (id: number) => {
    return selectedIngredients.includes(id)
  }

  return (
    <div className="flex flex-col items-center py-8 px-3 bg-green-100 h-screen">
      <div className="py-2">
        <h1 className="text-slate-800 text-3xl text-center">iQuchnia</h1>
        <h3 className="text-center text-slate-600 pt-2">Twoja Inteligentna ksiązka Kucharska</h3>
      </div>
      <div>
        <IngredientsSearch 
          handleSearch={handleSearch}
        />
      </div>
      <div className="py-2">
        Składniki
      </div>
      <div className='py-2 flex flex-wrap justify-center'>
        {
          ingredients.map((ingredient) => (
            <IngredientButton
              key={ingredient.id}
              active={activeIngredientButton(ingredient.id)}
              onClick={toggleIngredients}
              ingredient={ingredient}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SideBar