import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BiTime  } from "react-icons/bi"
import {GiChickenOven} from "react-icons/gi"

import { useRecipies } from 'src/hooks/useRecipes';


const RecipePage = () => {
  const { getSingleRecipie, singleRecipie } = useRecipies()
  const { id } = useParams()

  useEffect(() => {
    if(id) { 
      getSingleRecipie(id)
    }
    
  }, [])

  return (
    <div className='flex sm bg-green-100 max-h-max m-20 p-10 flex-col space-y-10 rounded-lg items-center  '>
        <span className='flex flex-col items-center'>
          {singleRecipie?.name}
          <span className="flex items-center"> 
            <BiTime/> Czas przygotowania {singleRecipie?.prep_time / 60} min   
            <GiChickenOven/> Czas gotowania {singleRecipie?.cook_time / 60} min
          </span>
          <span>
            {singleRecipie?.fat ? 'T:' + singleRecipie?.fat + ' ' : null} 
            {singleRecipie?.carbs ? 'W:' + singleRecipie?.carbs + ' ' : null} 
            {singleRecipie?.protein ? 'B:' + singleRecipie?.protein + ' '  : null}
          </span>
          {/* add img here */}
        </span>
        <span>Składniki: {singleRecipie?.ingredients}</span>
        <span>Instrukcje: {singleRecipie?.instructions}</span>
        <span>{singleRecipie?.comment ? "Komentarz: " + singleRecipie?.comment : null }</span>
    </div>
    
  )
}

export default RecipePage