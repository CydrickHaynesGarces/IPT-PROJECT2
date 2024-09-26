import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Example from "./Example";
import Home from "./home";  // Ensure this path is correct
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Login from "./Login"; 
import Register from './Register';


export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Example />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}
