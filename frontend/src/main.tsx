import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RecipiesProvider } from './context/RecpiesContext'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecipiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecipiesProvider>
  </React.StrictMode>,
)
