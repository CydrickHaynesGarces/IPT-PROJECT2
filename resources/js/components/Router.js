// resources/js/components/Routers.js
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DefaultPage from "./DefaultPage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Login from "./Login"; 
import AdminLogin from './AdminLogin'; 
import Dashboard from './Dashboard';
import StudentReg from './StudentReg'; // Import StudentReg component
import StudentInfo from './StudentInfo'; // Import StudentInfo component

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DefaultPage />} />            
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/student-reg" element={<StudentReg />} /> {/* Route for StudentReg */}
                <Route path="/student-info" element={<StudentInfo />} /> {/* Route for StudentInfo */}
            </Routes>
        </Router>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}
