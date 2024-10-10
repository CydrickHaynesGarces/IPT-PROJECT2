import React, { useState } from 'react'; 
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faChalkboardTeacher, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/StudentInfo.scss'; 
import '../../sass/Sidebar.scss'; 

export default function StudentInfo({ onLogout }) {
    const { state } = useLocation();
    const navigate = useNavigate();

    const studentData = [
        { id: "001", name: "Noriel", gender: "Male", class: "2", section: "IT-31", parents: "Parent A", address: "Address A", dob: "01/01/2000", phone: "+123 1111111", email: "noriel@example.com" },
        { id: "002", name: "Wendel", gender: "Male", class: "2", section: "IT-31", parents: "Parent B", address: "Address B", dob: "02/02/2001", phone: "+123 2222222", email: "wendel@example.com" },
        { id: "003", name: "Rondel", gender: "Male", class: "3", section: "IT-32", parents: "Parent C", address: "Address C", dob: "03/03/2002", phone: "+123 3333333", email: "rondel@example.com" },
        { id: "004", name: "Clark", gender: "Male", class: "3", section: "IT-32", parents: "Parent D", address: "Address D", dob: "04/04/2003", phone: "+123 4444444", email: "clark@example.com" },
        { id: "005", name: "Kirk", gender: "Male", class: "2", section: "IT-31", parents: "Parent E", address: "Address E", dob: "05/05/2004", phone: "+123 5555555", email: "kirk@example.com" },
        { id: "006", name: "Chong", gender: "Male", class: "2", section: "IT-31", parents: "Parent F", address: "Address F", dob: "06/06/2005", phone: "+123 6666666", email: "chong@example.com" },
        { id: "007", name: "Uriel", gender: "Male", class: "2", section: "IT-31", parents: "Parent G", address: "Address G", dob: "07/07/2006", phone: "+123 7777777", email: "uriel@example.com" },
        { id: "008", name: "Bena", gender: "Female", class: "2", section: "IT-31", parents: "Parent H", address: "Address H", dob: "08/08/2007", phone: "+123 8888888", email: "bena@example.com" },
        { id: "009", name: "Jash", gender: "Male", class: "3", section: "IT-32", parents: "Parent I", address: "Address I", dob: "09/09/2008", phone: "+123 9999999", email: "jash@example.com" },
        { id: "010", name: "Kez", gender: "Female", class: "3", section: "IT-32", parents: "Parent J", address: "Address J", dob: "10/10/2009", phone: "+123 1010101", email: "kez@example.com" },
        { id: "011", name: "Mitz", gender: "Female", class: "3", section: "IT-32", parents: "Parent K", address: "Address K", dob: "11/11/2010", phone: "+123 1111112", email: "mitz@example.com" },
        { id: "012", name: "Darc", gender: "Male", class: "3", section: "IT-32", parents: "Parent L", address: "Address L", dob: "12/12/2011", phone: "+123 1212121", email: "darc@example.com" },
        { id: "013", name: "Kat", gender: "Female", class: "3", section: "IT-32", parents: "Parent M", address: "Address M", dob: "01/01/2012", phone: "+123 1313131", email: "kat@example.com" }
    ];

    const [searchId, setSearchId] = useState('');
    const [searchName, setSearchName] = useState('');

    const filteredStudents = studentData.filter(student => 
        (student.id.includes(searchId) || searchId === '') &&
        (student.name.toLowerCase().includes(searchName.toLowerCase()) || searchName === '')
    );

    return (
        <div className="container-fluid d-flex">
            <aside className="sidebar expanded">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">
                            <FontAwesomeIcon icon={faHome} />
                            <span className="link-text">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/student-info" className="nav-link">
                            <FontAwesomeIcon icon={faUser} />
                            <span className="link-text">Students</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">
                            <FontAwesomeIcon icon={faChalkboardTeacher} />
                            <span className="link-text">Teachers</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link logout-btn" onClick={onLogout}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <span className="link-text">Logout</span>
                        </button>
                    </li>
                </ul>
            </aside>

            <div className="main sidebar-visible flex-grow-1 d-flex flex-column align-items-center">
                <h1 className="text-center mb-4">All Students Data</h1>
                <div className="search-container text-center mb-4">
                    <input
                        type="text"
                        placeholder="Search by Student ID..."
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        className="search-input"
                    />
                    <input
                        type="text"
                        placeholder="Search by Name..."
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        className="search-input"
                    />
                    <button className="btn btn-primary">SEARCH</button>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover mx-auto" style={{ width: '80%' }}>
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Section</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.section}</td>
                                    <td>{student.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
