
import { NavLink, Outlet } from "react-router-dom";

const RouterSubRutas = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>InicioSubRuta</NavLink>
          </li>
          <li>
            <NavLink to='subrutas1'>SubRuta1</NavLink>
          </li>
          <li>
            <NavLink to='subrutas2'>SubRuta2</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default RouterSubRutas;



