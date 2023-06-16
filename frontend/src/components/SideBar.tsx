import IngredientButton from './IngredientButton'

import { Ingredient }  from 'src/types'

interface ISideBar {
  toggleIngredients: (id: number) => void,
  ingredients: Ingredient[],
  selectedIngredients: number[]
}

const SideBar: React.FC<ISideBar> = ({ toggleIngredients, ingredients, selectedIngredients }) => {


  const activeIngredientButton = (id: number) => {
    return selectedIngredients.includes(id)
  }

  return (
    <div className="flex flex-col items-center py-8 px-3 bg-green-100 h-screen">
      <div className="py-2">
        <h1 className="text-slate-800 text-3xl text-center">iQuchnia</h1>
        <h3 className="text-center text-slate-600 pt-2">Twoja Inteligentna ksiązka Kucharska</h3>
      </div>
      <div className="py-2">
        Składniki
      </div>
      <div className='py-2'>
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