import { createContext, useContext, useState } from 'react'

interface IRecpiesContext {}

const defaultValue: IRecpiesContext = {}

const RecipiesContext = createContext<IRecpiesContext>(defaultValue)

export const RecipiesProvider: React.FC<{ children: JSX.Element}> = ({ children }) => {

  return (
    <RecipiesContext.Provider value={{}}>
      {children}
    </RecipiesContext.Provider>
  )
}

export const useRecipiesContext = () => useContext(RecipiesContext)