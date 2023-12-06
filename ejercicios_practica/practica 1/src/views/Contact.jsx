
import { useState } from "react";
import { Link } from "react-router-dom";






const Contact = ()=> {

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [success, setSuccess] = useState(false);
   
    const handleChange = (e) => {
       setForm({ ...form, [e.target.name]: e.target.value });
    };
   
    const handleSubmit = async (e) => {
       e.preventDefault();
       setSuccess(true);
    };
   
    if (success) {
       return <h2>Gracias por contactarnos. ¡Nos pondremos en contacto contigo pronto!</h2>;
    }
    

    return (
        <nav>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}/>
                
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" name="email" value={form.email} onChange={handleChange}/><br />
                
                <label htmlFor="message">Mensaje:</label>
                <textarea name="message" value={form.message} onChange={handleChange}/>
                
                <button type="submit">Enviar</button>
            </form>

            <ul>
                <li>
                    <Link to="/">volver a inicio</Link>
                </li>
            </ul>
        </nav>
    );
};
        
export default Contact;
