import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Importa el CSS para estilos

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para navegar a otras rutas

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', {
        username: username,
        password: password,
      });

      // Guardar el token JWT en localStorage
      localStorage.setItem('token', response.data.token);

      // Redirigir al dashboard después del login exitoso
      navigate('/dashboards/dashboard1'); // Redirige al dashboard
    } catch (error) {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="bg-body-tertiary">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Iniciar Sesión</h1>
        <p className="text-body-secondary text-center">Ingresa tus datos</p>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit">Iniciar Sesión</button>
        </div>
        <div className="text-center mt-3">
          <p>¿No tienes una cuenta?</p>
          <button type="button" className="link-button" onClick={() => navigate('/register')}>
            Registrate
          </button>
        </div>
        {error && <p className="text-danger text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
