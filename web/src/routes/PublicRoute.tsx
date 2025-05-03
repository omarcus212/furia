import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageLogin from "../pages/login";
import PageRegister from "../pages/register/index.tsx";

const PublicRoute: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route index path={'/login'} element={<PageLogin />} />
            <Route index path={'/register'} element={<PageRegister />} />
        </Routes>
    )
};

export default PublicRoute;
