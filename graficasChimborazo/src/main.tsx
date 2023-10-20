import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/404/notFound.tsx'
import { NavBar } from './components/NavBar/Nav.tsx'
import { SelloDetail } from './components/SelloDe/selloDetail.tsx'
import { Servicios } from './pages/servicios/Servicios.tsx'
import { Contactenos } from './pages/contactenos/contactenos.tsx' 

const router = createBrowserRouter([
  {
    path: '/inicio',
   
    element: <App/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/servicios',
    element: <Servicios></Servicios>,
    
    errorElement: <NotFound/>,
    
  },
  {
    path: 'inicio/:id',
    element: <SelloDetail/>,
    errorElement: <NotFound/>,
  },
  {
    path: 'contactenos',
     element: <Contactenos/>,
     errorElement: <NotFound/>,
  },
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
