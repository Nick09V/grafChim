import './App.css'
import { Home } from './pages/home/home'
import { Route } from 'react-router-dom'
//import { Contador } from './components/contador/Contador'
//
import { SelloContainer } from './components/selloContainer/SelloContainer'
import { NavBar } from './components/NavBar/Nav'
function App() {
  return(

    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1>La App</h1>
      <NavBar></NavBar>
      <Home></Home>
      <SelloContainer/>
    

      
    </div>

   
  )
}

export default App

