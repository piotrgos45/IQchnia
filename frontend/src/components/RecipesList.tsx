import React from "react"
import { Recipe } from "src/types"

import RecipeElement from "./RecipeElement"
import Loading from "./LoadingState"

interface IRecipesList {
  recipesList:Recipe[],
  loadingState: boolean
}

const RecipiesList:React.FC<IRecipesList> = ({recipesList, loadingState}) => {
  return (
      !loadingState ? (
        <div className='
          md:grid md:grid-cols-4 md:grid-rows-4 md:col-span-3 md:row-span-3 md:gap-10 
          grid-cols-1 col-span-3 row-span-3 p-6 grid gap-10 grid-rows-4
        '>
          {
            !loadingState ? (
              recipesList.map((recipe) => 
              <RecipeElement key={recipe.id} recipe={recipe}/>
              )
            ) : (
              <Loading />
            )
          }
        </div>
      ): (
        <div className="col-span-3 grid">
          <Loading />
        </div>
      )
  )
}

export default RecipiesList