import axios from 'axios'
import { Ingredient } from 'src/types'

const apiBase = axios.create({
  baseURL: 'http://127.0.0.1:8000/'
})

export const getAllRecipies = () => {}

export const getRecipieById = () => {}

export const getRecipieByIngredientIds = () => {}