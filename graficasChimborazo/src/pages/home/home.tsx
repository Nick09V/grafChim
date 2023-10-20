import { ulHome,liHome, ImgHome } from "./HomeEstilos"

export const Home = () => {
return (
    <div>
        <nav>
            <h1>Graficas Chimborazo</h1>  
            <ul style={ulHome}>
                <button style={liHome}>Inicio</button>
                <button style={liHome}>Servicios</button>
                <button style={liHome}>Promociones</button>
                <button style={liHome}>Contactenos</button>
                
      </ul>
        </nav>
        <div>
            <img style={ImgHome} src ="../public/logo.jpeg"/>
            <section>
    
            </section>


        </div>



    </div>
    
)
}

