import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faChalkboardTeacher, faSignOutAlt, faUserGraduate, faBuilding } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import '../../sass/Sidebar.scss';
import '../../sass/Dashboard.scss'; 
import Chart from './Chart'; // Import the reusable Chart component

export default function Dashboard({ onLogout }) {
    const [date, setDate] = useState(new Date());
    const [notices, setNotices] = useState([
        "Welcome to the new academic year! Classes start on September 15.",
        "Don't forget to register for the upcoming workshops.",
        "The annual sports day will be held on October 20.",
        "Midterm exams are scheduled for November 1-5.",
        "Check your email for scholarship opportunities!",
    ]);

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    // Sample data for charts
    const earningsData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Earnings',
                data: [5000, 7000, 8000, 6000, 9000, 10000],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const statisticsData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: '',
                data: [5, 10, 15, 20],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
            },
        ],
    };

    const courseProgressData = {
        labels: ['Completed', 'Remaining'],
        datasets: [
            {
                data: [70, 30], // Adjust percentages as needed
                backgroundColor: ['#36A2EB', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384'],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        cutout: '70%', // This makes the pie chart into a donut chart
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    }
                }
            }
        },
    };

    return (
        <div className="container-fluid dashboard-container">
            <aside className="sidebar">
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

            <div className="main">
                <div className="left-content">
                    <h1 className="dashboard-title">Welcome to the University Dashboard</h1>

                    <div className="statistics-section">
                        <div className="statistic">
                            <FontAwesomeIcon icon={faUserGraduate} size="2x" />
                            <h2>Total Students</h2>
                            <p>120</p>
                        </div>
                        <div className="statistic">
                            <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" />
                            <h2>Total Teachers</h2>
                            <p>30</p>
                        </div>
                        <div className="statistic">
                            <FontAwesomeIcon icon={faBuilding} size="2x" />
                            <h2>Total Rooms</h2>
                            <p>10</p>
                        </div>
                        <div className="statistic">
                            <h2>Course Activities</h2>
                            <div style={{ position: 'relative', height: '300px', width: '300px', margin: '0 auto' }}>
                                <Chart type="pie" title="Course Progress" data={courseProgressData} options={chartOptions} />
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: '#000',
                                    textAlign: 'center',
                                    pointerEvents: 'none' // Prevent interaction with the text overlay
                                }}>
                                    70%
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="chart-section">
                        <div className="chart total-earnings">
                            <Chart title="Total Earnings" data={earningsData} options={chartOptions} type="line" />
                        </div>
                        <div className="chart statistics">
                            <Chart title="Statistics" data={statisticsData} options={chartOptions} type="line" />
                        </div>
                    </div>
                </div>

                <div className="right-content">
                    <div className="calendar-section">
                        <Calendar onChange={handleDateChange} value={date} />
                    </div>
                    <div className="notice-board-section">
                        <h2>Notice Board</h2>
                        <ul className="notice-list">
                            {notices.map((notice, index) => (
                                <li key={index} className="notice-item">
                                    {notice}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
