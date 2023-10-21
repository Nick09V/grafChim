
import { NavBar } from "../../components/NavBar/Nav"

export const Contactenos = () => {

    return (
        <div>   
            <NavBar/>


            <p style={{
                border: "3px solid black",
                textAlign: "center",
                fontSize: "20px",
                color: "black",
                padding: "20px"
            }}>Email: "usuario@gmail.com"
                <br></br>
                Telefono: 999999999
                <br></br>
                Celular: 999999999
                <br></br>
                <a href="www.whatsapp.com" target="_blank">whatsapp</a>
                
            </p>

            Contactenos
        </div>
    )
}