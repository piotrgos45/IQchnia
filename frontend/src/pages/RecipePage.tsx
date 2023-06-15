import { useParams } from 'react-router-dom';

const RecipePage = () => {
  // const location = useLocation()
  const { id } = useParams()

  console.log(id);

  return (
    <span>RecipePage number {id}</span>
  )
}

export default RecipePage