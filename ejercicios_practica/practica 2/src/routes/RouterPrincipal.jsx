
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../views/Home";
import Componente2 from "../views/Componente2";
import ComponenteExtra from "../views/ComponenteExtra";
import Error404 from "../views/Error404";
import RouterSubRutas from "./RouterSubRutas";
import InicioSubRuta from "../views/subrutas/InicioSubRuta";
import SubRuta1 from "../views/subrutas/SubRuta1";
import SubRuta2 from "../views/subrutas/SubRuta2";
import Persona from "../views/Persona";

export default function RouterPrincipal() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/componente2' element={<Componente2 />} />
        <Route path='/componenteExtra' element={<ComponenteExtra />} />
        <Route path='/subrutas' element={<RouterSubRutas />}>
          <Route index element={<InicioSubRuta />} />
          <Route path='subrutas1' element={<SubRuta1 />} />
          <Route path='subrutas2' element={<SubRuta2 />} />
        </Route>

        <Route path="/persona/:nombre/:apellido" element={<Persona />} />
        <Route path="/persona/:nombre" element={<Persona />} />
        <Route path="/persona" element={<Persona />} />

        <Route path="/navegar" element={<Navigate to="/persona/TuNombre/TuApellido"/>}/>

        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

  