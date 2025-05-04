import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRouter: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRouter;
