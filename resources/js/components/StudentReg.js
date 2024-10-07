// resources/js/components/StudentReg.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../sass/StudentReg.scss'; // Import the SCSS file for styling

export default function StudentReg() {
    const [studentName, setStudentName] = useState('');
    const [gmail, setGmail] = useState('');
    const [studentId, setStudentId] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Simple validation
        if (!studentName || !gmail || !studentId) {
            alert('Please fill in all fields.');
            return;
        }

        // Navigate to StudentInfo and pass the student information
        navigate('/student-info', {
            state: { studentName, gmail, studentId },
        });

        // Reset the form fields
        setStudentName('');
        setGmail('');
        setStudentId('');
    };

    return (
        <div className="student-reg">
            <h1>Register Student</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Student Name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Gmail"
                    value={gmail}
                    onChange={(e) => setGmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
