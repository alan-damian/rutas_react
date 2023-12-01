import { Outlet } from "react-router-dom";




export default function InicioSubRuta() {
    return (
      <div>
        
        <h1>Inicio SubRuta</h1>
        <Outlet/>
      </div>
    );
  }