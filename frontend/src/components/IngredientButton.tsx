import { Ingredient }  from 'src/types'

interface IIngredientButton {
  ingredient: Ingredient
  onClick: (id: number) => void,
  active: boolean
}

const IngredientButton: React.FC<IIngredientButton> = ({ active, ingredient, onClick, }) => {
  const capitalizeIngredient = (ingredient: string) => {
    return ingredient.charAt(0).toUpperCase() + ingredient.slice(1)
  }

  const buttonStyles = () => {
    return active ? 'bg-sky-200 border-slate-600' : 'bg-white border-slate-600'
  }

  return (
    <button className={`text-slate-600 border-[1px] m-1 px-2 py-1 rounded-full text-sm ${buttonStyles()}`} onClick={() => onClick(ingredient.id)}>
      {capitalizeIngredient(ingredient.name)}
    </button>
  )
}

export default IngredientButton