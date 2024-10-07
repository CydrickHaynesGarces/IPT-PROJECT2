import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../sass/StudentInfo.scss'; // Import the SCSS file for styling

export default function StudentInfo() {
    const { state } = useLocation(); // Get the state passed during navigation
    const navigate = useNavigate(); // Hook to navigate

    // Example student information to display when no state is provided
    const exampleStudent = {
        studentName: "Rondel Benegian",
        gmail: "ronddel@gmail.com",
        studentId: "25300000521"
    };

    // Function to handle the "Go Back" button click
    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const student = state || exampleStudent; // Use the state or example if no state

    return (
        <div className="student-info">
            <h1>Student Information</h1>
            <div className="data-card">
                <div className="data-item">
                    <strong>Name:</strong> <span>{student.studentName}</span>
                </div>
                <div className="data-item">
                    <strong>Email:</strong> <span>{student.gmail}</span>
                </div>
                <div className="data-item">
                    <strong>Student ID:</strong> <span>{student.studentId}</span>
                </div>
            </div>
            <div className="footer">
                <button className="btn" onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
}
