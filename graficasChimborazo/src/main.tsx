import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/home.tsx'
import { NotFound } from './pages/404/notFound.tsx'
import { NavBar } from './components/NavBar/Nav.tsx'
import { SelloDetail } from './components/SelloDetail/selloDetail.tsx'

const router = createBrowserRouter([
  {
    path: '/inicio',
   
    element: <App/>,
    errorElement: <NotFound/>,
  },
  {
    path: '/servicios',
    element: 
    <>
    <NavBar></NavBar>
    <div>Esta es la pagina de servicios</div>,
    
    </>,
    
    errorElement: <NotFound/>,
    
  },
  {
    path: 'inicio/:id',
    element: <SelloDetail/>,
    errorElement: <NotFound/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
