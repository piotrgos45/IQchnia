import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BiTime , BiBowlHot } from "react-icons/bi"
import {GiCookingPot} from "react-icons/gi"

import { useRecipies } from 'src/hooks/useRecipes';


const RecipePage = () => {
  const { getSingleRecipie, singleRecipie } = useRecipies()
  const { id } = useParams()
  const imagePath = "http://localhost:8000" + singleRecipie?.image.toString()
  useEffect(() => {
    if(id) { 
      getSingleRecipie(id)
    }
    
  }, [])
  return (
    <div className='flex sm bg-green-100 max-h-max m-20 p-10 flex-col space-y-10 rounded-lg items-center font-roboto'>
        <span className='flex flex-col items-center'>
          <span className='text-xl font-bold'>{singleRecipie?.name}</span>
          <span className="flex items-center"> 
            <BiTime/> Czas przygotowania {(singleRecipie?.prep_time ?? 0) / 60} min   
            <GiCookingPot/> Czas gotowania {(singleRecipie?.cook_time ?? 0) / 60} min
            <BiBowlHot/>{singleRecipie?.servings ? 'Porcje:' + singleRecipie?.servings + ' ' : null}
          </span>
          <span>
            {singleRecipie?.fat ? 'T:' + singleRecipie?.fat + ' ' : null} 
            {singleRecipie?.carbs ? 'W:' + singleRecipie?.carbs + ' ' : null} 
            {singleRecipie?.protein ? 'B:' + singleRecipie?.protein + ' '  : null}
          </span>
          {singleRecipie?.image ? <img className='max-w-lg' src={imagePath} alt='Zdjęcie niedostępne'></img> : null}
        </span>
        <span><b>Składniki:</b> {singleRecipie?.ingredients}</span>
        <span><b>Instrukcje:</b> {singleRecipie?.instructions}</span>
        <span>{singleRecipie?.comment ? "Komentarz: " + singleRecipie?.comment : null }</span>
    </div>
    
  )
}

export default RecipePage