
import { Recipe } from "src/types"
import { BiTime  } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

interface IRecipe{
    recipe: Recipe,
}

const RecipeElement:React.FC<IRecipe> = ({recipe}) => {
    const navigation = useNavigate()

    const handleClickElement = (id: number) => {
        navigation(`/recipe/${id}`)
    }

    return (
        <div className="flex flex-col justify-around borderbox border-2 border-grey align-center items-center text-center rounded-lg border-slate-500 cursor-pointer" onClick={() => handleClickElement(recipe.id)}>
            <span className="text-lg font-bold">{recipe.name}</span>
            <span className="flex items-center justify-center "> <BiTime/> {recipe.cook_time / 60} min </span>
            <span> 
                {recipe.fat ? 'T:' + recipe.fat + ' ' : null} 
                {recipe.carbs ? 'W:' + recipe.carbs + ' ' : null} 
                {recipe.protein ? 'B:' + recipe.protein + ' '  : null}
            </span> 
            <span>{recipe.servings ? 'Porcje:' + recipe.servings + ' ' : null} </span>
        </div>
    )
}

export default RecipeElement