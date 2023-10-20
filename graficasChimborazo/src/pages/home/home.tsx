
import {  ImgHome, DispleyHome } from "./HomeEstilos"
//import { UnsplashImages } from "../../components/imagenUnsplash/ImagenUnsplash"
import { NavBar } from "../../components/NavBar/Nav"
//<UnsplashImages></UnsplashImages>
export const Home = () => {
return (
    <div style={DispleyHome}>
        <NavBar></NavBar>
        <nav>
            <h1>Graficas Chimborazo</h1>  
        </nav>
        <div>
            <img style={ImgHome} src ="../public/logo.jpeg"/>
            



        </div>



    </div>
    
)
}

