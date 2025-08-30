import React from "react";
import { useNavigate } from "react-router-dom"; // para movernos entre páginas
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate("/services"); // 👈 esta ruta debe coincidir con la que definiste en App.jsx
  };

  return (
    <div className="home-container">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" 
        alt="Logo motocicleta" 
        className="home-logo"
      />
      <h1>Bienvenido al Taller Expert</h1>
      <p>
        En <strong>Taller Expert</strong> nos especializamos en la reparación y mantenimiento de motocicletas y vehículos.  
        Nuestro equipo combina experiencia, tecnología moderna y pasión por los motores para ofrecerte un servicio confiable y rápido.  
        Aquí tu vehículo recibe el cuidado que merece para mantenerlo en la mejor condición.
      </p>
      <button className="home-btn" onClick={goToServices}>
        Conoce nuestros servicios
      </button>
    </div>
  );
}
