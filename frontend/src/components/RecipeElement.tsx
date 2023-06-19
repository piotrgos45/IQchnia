
import { Recipe } from "src/types"
import { BiTime  } from "react-icons/bi"

interface IRecipe{
    recipe: Recipe
}

const RecipeElement:React.FC<IRecipe> = ({recipe}) => {
    return (
        <div className="grid column-1 borderbox border-2 border-grey align-center items-center text-center rounded-lg border-slate-500">
            <h3>{recipe.name}</h3>
            <span className="flex items-center justify-center"> <BiTime/> {recipe.cook_time / 60} min</span>
            <span> 
                {recipe.fat ? 'T:' + recipe.fat + ' ' : null} 
                {recipe.carbs ? 'W:' + recipe.carbs + ' ' : null} 
                {recipe.protein ? 'B:' + recipe.protein + ' '  : null}
            </span> 
        </div>
    )
}

export default RecipeElement