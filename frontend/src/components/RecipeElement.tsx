
import { Recipe } from "src/types"

interface IRecipe{
    recipe: Recipe
}

const RecipeElement:React.FC<IRecipe> = ({recipe}) => {
    return (
        <div className="borderbox border-2">
            <h3>{recipe.name}</h3>
        </div>
    )
}

export default RecipeElement