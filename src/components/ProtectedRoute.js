import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Verificar si existe el token JWT

  if (!token) {
    return <Navigate to="/login" />; // Redirigir al login si no hay token
  }

  return children;
};

export default ProtectedRoute;
