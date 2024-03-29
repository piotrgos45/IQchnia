import axios from 'axios'
import { Ingredient } from 'src/types'

const apiBase = axios.create({
  baseURL: 'http://127.0.0.1:8000/'
})

export const getAllIngredients = async () => {
  return apiBase.get('/api/ingredients')
    .then((res) => res.data)
}