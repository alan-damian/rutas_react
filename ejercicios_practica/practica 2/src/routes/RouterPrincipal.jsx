
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../views/Home";
import Componente2 from "../views/Componente2";
import ComponenteExtra from "../views/ComponenteExtra";
import Error404 from "../views/Error404";
import RouterSubRutas from "./RouterSubRutas";
import InicioSubRuta from "../views/subrutas/InicioSubRuta";
import SubRuta1 from "../views/subrutas/SubRuta1";
import SubRuta2 from "../views/subrutas/SubRuta2";

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
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

  