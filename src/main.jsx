import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Rutas
import Root from './Routes/Root'
import PokeCard from './Components/C-Subcomponentes/PokeCard'



// CSS
import "./Styles/main.css" 


const router = createBrowserRouter([
  {
    // Home
    path: '/',
    element: <Root />,
  },
  {
    // Pokemon Stats
    path: 'pokemon/:pokemonId',
    element: <PokeCard/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)