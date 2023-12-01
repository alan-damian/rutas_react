
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";

import InicioSubRuta from "../views/subrutas/InicioSubRuta";
import SubRuta1 from "../views/subrutas/SubRuta1";
import SubRuta2 from "../views/subrutas/SubRuta2";



const RouterSubRutas = () => {
    return (
         <BrowserRouter>
         <div>
            <nav>
                <ul>

                    <li>
                    <NavLink to="/SubRutas">InicioSubRuta</NavLink>
                    </li>

                    <li>
                    <NavLink to="/SubRutas/SubRuta1">SubRuta1</NavLink>
                    </li>

                    <li>
                    <NavLink to="/SubRutas/SubRuta2">SubRuta2</NavLink>
                    </li>

                </ul>
            </nav>
         </div>

            <Routes>
                    <Route index element={<InicioSubRuta />}/>
                    <Route path="/SubRutas/SubRuta1" element={<SubRuta1 />} />
                    <Route path="/SubRutas/SubRuta2" element={<SubRuta2 />} />
                
            </Routes>           
            
            <Outlet />
        </BrowserRouter>
    );
   };
   
   export default RouterSubRutas;



