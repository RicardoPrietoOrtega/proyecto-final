import React, { useState } from 'react';
import '../style/Register.css'; // Asegúrate de tener este archivo en tu proyecto
import logo from '../images/logo_Yorch_Print.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register({ onBackClick }) {


    const navigate = useNavigate();

    const irAtras = () => {
        navigate(-1);
    }

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        contraseña: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // llamado a la api para registrar
    const registrarUsuario = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error al registrar al usuario:', error);
        }
    };



    return (
        <div className="register-container">
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <form onSubmit={registrarUsuario} className="register-form">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder="Número de teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="contraseña"
                    placeholder="Contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Crear cuenta nueva</button>
                <button type="button" onClick={irAtras}>Volver</button>
            </form>
        </div>
    );
}

export default Register;
