
import {  ImgHome, DispleyHome, H1Home } from "./HomeEstilos"
//import { UnsplashImages } from "../../components/imagenUnsplash/ImagenUnsplash"
import { NavBar } from "../../components/NavBar/Nav"
// <UnsplashImages></UnsplashImages>
export const Home = () => {
return (
    <div style={DispleyHome}>
        <h1 style={H1Home}>La imprenta en tú mano</h1>
        <NavBar></NavBar>
        
        <div style={{ display: "flex"  }}>
            <img style={ImgHome} src ="../public/logo.jpeg"/>
                <a href="www.facebook.com" style={{padding: "20px", border: "1px solid black", backgroundColor: "#B1F297"
                
            }} >Facebook</a>
           



        </div>



    </div>
    
)
}

