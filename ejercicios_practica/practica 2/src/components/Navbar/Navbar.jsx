import { NavLink } from "react-router-dom";




const Navbar = () => {
    return (
      <nav>
          <ul>

            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>

            <li>
              <NavLink to="/Componente2">Componente2</NavLink>
            </li>

            <li>
              <NavLink to="/ComponenteExtra">Componente Extra</NavLink>
            </li>

            <li>
              <NavLink to="/SubRutas">Sub Rutas</NavLink>
            </li>

          </ul>
      </nav>
    );
  };
  
  export default Navbar;
  