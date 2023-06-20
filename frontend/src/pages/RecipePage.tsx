import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

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
    <span>RecipePage number {singleRecipie?.name}</span>
  )
}

export default RecipePage