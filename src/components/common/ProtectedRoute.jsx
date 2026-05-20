import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userToken = localStorage.getItem('userToken');
  
  // If no token exists, redirect to login
  if (!userToken) {
    return <Navigate to="/auth/login" replace />;
  }
  
  // If token exists, render the protected component
  return children;
};

export default ProtectedRoute;
