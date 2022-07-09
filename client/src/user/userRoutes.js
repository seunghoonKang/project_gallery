import React, {lazy} from 'react';
import {Route, Routes} from "react-router-dom";
// import Proposal from "../Proposal/proposal";

const Login = lazy(() => import('./login'));
const Register = lazy(() => import('./register'));

function UserRoutes() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
    );
}

export default UserRoutes;
