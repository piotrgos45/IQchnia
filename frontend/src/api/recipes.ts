import axios from 'axios'

const apiBase = axios.create({
  baseURL: 'http://127.0.0.1:8000/'
})

export const getAllRecipes = () => {
  return apiBase.get('/api/recipes')
    .then((res)=>res.data)
}

export const getRecipeById = () => {}

export const getRecipeByIngredientIds = () => {}