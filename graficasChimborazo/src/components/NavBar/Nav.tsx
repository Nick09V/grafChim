import { BrowserRouter, Link } from "react-router-dom";

export const NavBar = () => {
 return (
    <nav>
        <ul>
          
          <li>< Link to="/inicio">inicio</Link></li>
          <li><Link to="/servicios">servicios</Link></li>
          
        </ul>
      </nav>


 )
};