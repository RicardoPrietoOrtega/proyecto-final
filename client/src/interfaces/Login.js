import React, { useState, useEffect } from 'react';
import '../style/Login.css';
import logo from '../images/logo_Yorch_Print.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onNewAccountClick }) {
    const [userInput, setUserInput] = useState({
        correo: '',
        contraseña: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // El usuario ya está autenticado, redirige a la página principal
            navigate('/Inicio');
        }
    }, [navigate]);

    const irARegistrar = () => {
        navigate('/Registrar');
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validarUsuario = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', userInput);
            console.log(response.data);
            // Almacena el token de sesión en el almacenamiento local
            localStorage.setItem('token', response.data.token);
            // Redirige a la página principal
            navigate('/Inicio');
        } catch (error) {
            console.error('Error al validar al usuario:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userInput);
        validarUsuario();
    };

    return (
        <div className="login-container">
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    name="correo"
                    value={userInput.correo}
                    onChange={handleChange}
                    placeholder="Correo electrónico o teléfono"
                    required
                />
                <input
                    type="password"
                    name="contraseña"
                    value={userInput.contraseña}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    required
                />
                <button type="submit">Iniciar sesión</button>
                <a href="#forgot-password">¿Olvidaste tu contraseña?</a>
                <button type="button" onClick={irARegistrar} className='nuevaCuenta'>Crear cuenta nueva</button>
            </form>
        </div>
    );
}

export default Login;
