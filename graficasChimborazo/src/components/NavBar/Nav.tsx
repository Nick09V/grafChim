import { BrowserRouter, Link } from "react-router-dom";
import { ButtonNav, UlNav, liNav } from "./NavBarEstilos";

export const NavBar = () => {
 return (
    <nav>
        <ul style={UlNav}>
          
          <button style={ButtonNav}>< Link to="/inicio" style={liNav}>inicio</Link></button>
          <button style={ButtonNav}><Link to="/servicios" style={liNav}>servicios</Link></button>
          <button style={ButtonNav}><Link to="/contactenos" style={liNav}>Contactenos</Link></button>
          
        </ul>
      </nav>


 )
};