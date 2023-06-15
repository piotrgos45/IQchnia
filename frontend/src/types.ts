export type Ingredient = {
  id: number,
  name: string
}

export type Recipe = {
  id: number,
  name: string,
  source: string,
  prep_time: number
  wait_time:number,
  cook_time: number,
  servings: number,
  comment: string,
  calories: number,
  fat: number,
  satfat: number,
  carbs: number,
  fiber: number,
  sugar: number,
  protein: number,
  instructions: string,
  ingredients: string[],
  tags: string[]
}