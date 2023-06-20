import axios from 'axios'

const apiBase = axios.create({
  baseURL: 'http://127.0.0.1:8000/'
})

export const getAllRecipes = () => {
  return apiBase.get('/api/recipes')
    .then((res)=>res.data)
}

export const getRecipeById = (id: string) => {
  return apiBase.get(`/api/recipes/?id=${id}`)
    .then((res)=>res.data)
}

export const getRecipeByIngredientIds = (id: number[]) => {
  const ids = id.map((id) => `ingredients[]=${id}`).join('&')
  return apiBase.get(`/api/recipes/?${ids}`)
    .then((res) => res.data)
}