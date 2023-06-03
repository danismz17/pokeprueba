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
    path: 'pokemon/:pokemonId',
    element: <PokeCard />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // Para que no renderize dos veces la carga del fetch
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)