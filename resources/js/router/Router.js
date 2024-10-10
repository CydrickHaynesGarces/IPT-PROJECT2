// router/Router.js
import React from 'react'; // Import React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components

// Updated paths for components
import DefaultPage from "../components/DefaultPage";
import ContactUs from "../components/ContactUs";
import Login from "../auth/Login";
import AdminLogin from "../auth/AdminLogin";
import Dashboard from '../components/Dashboard';
import StudentReg from "../auth/StudentReg"; 
import StudentInfo from "../student/StudentInfo"; 

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DefaultPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/student-reg" element={<StudentReg />} />
                <Route path="/student-info" element={<StudentInfo />} />
            </Routes>
        </Router>
    );
}
