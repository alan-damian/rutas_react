
import { useNavigate, useParams } from "react-router-dom";

const Persona = () => {
    
    let navigate = useNavigate();
   
   
    const { nombre = " ", apellido = " " } = useParams();
   
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const { nombre, apellido } = e.target.elements;
    
        navigate(`/persona/${nombre.value}/${apellido.value}`);
    };




    return (
        <div>
            <h1>Bienvenido {nombre} {apellido}</h1>
        
            <h1>a la página Persona</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre"/>
                <br />
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" name="apellido"/>
                <br />
                <button type="submit">Enviar</button>
                <button type="reset">Limpiar</button>
            </form>
        </div>
    );
   };
   
   export default Persona;