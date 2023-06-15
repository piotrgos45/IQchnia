import { useEffect } from 'react'
import { useIngredients } from "src/hooks/useIngredients"
import SideBar from 'src/components/SideBar'

const MainPage = () => {
  const { getAllIngredients} = useIngredients()

  useEffect(() => {
    getAllIngredients()
  }, [])

  return (
    <div className='grid grid-cols-4 gap-4'>
      <SideBar />
      <div className='col-span-3'>Main Content</div>
    </div>
  )
}

export default MainPage