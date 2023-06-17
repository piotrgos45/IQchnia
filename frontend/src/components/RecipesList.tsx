import React from "react"
import { Recipe } from "src/types"
import RecipeElement from "./RecipeElement"

interface IRecipesList {
  recipesList:Recipe[]
}

const RecipiesList:React.FC<IRecipesList> = ({recipesList}) => {
  return (
    <div className='col-span-3 p-6 grid gap-10 grid-cols-4'> 
      {
        recipesList.map((recipe) => 
          <RecipeElement key={recipe.id} recipe={recipe}/>
        )
      }
    </div>
  )
}

export default RecipiesList