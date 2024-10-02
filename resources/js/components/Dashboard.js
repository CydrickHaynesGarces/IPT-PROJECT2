import React, { useState } from 'react';
import '../../sass/Dashboard.scss'; // Ensure the correct path

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
    };

    return (
        <div className="dashboard-container">
            <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="toggle-button" onClick={toggleSidebar}>
                    {isSidebarOpen ? '→' : '←'} {/* Arrow symbols for open/close */}
                </div>
                {isSidebarOpen && (
                    <>
                        <h2>Navigation</h2>
                        <ul>
                            <li>Dashboard</li>
                            <li>Statistics</li>
                            <li>Upcoming Events</li>
                            <li>Recent Activities</li>
                            <li>Announcements</li>
                        </ul>
                    </>
                )}
            </div>
            <div className="main-content">
                <h1>Dashboard</h1>
                <p>Welcome to the dashboard!</p>

                <section className="statistics">
                    <h2>Statistics</h2>
                    <ul>
                        <li>Total Students: 500</li>
                        <li>Total Male Students: 300</li>
                        <li>Total Female Students: 200</li>
                        <li>Total Teachers: 50</li>
                        <li>Total Employees: 20</li>
                    </ul>
                </section>

                <section className="attendance">
                    <h2>Attendance</h2>
                    <p>Total Attendance This Month: 90%</p>
                    <p>Students Present Today: 450</p>
                </section>

                <section className="notice-board">
                    <h2>Notice Board</h2>
                    <ul>
                        <li>Project submission due: October 5, 2024</li>
                        <li>Parent-Teacher Meeting: October 10, 2024</li>
                    </ul>
                </section>

                <section className="event-calendar">
                    <h2>Event Calendar</h2>
                    <ul>
                        <li>Science Fair: October 20, 2024</li>
                        <li>School Play: October 30, 2024</li>
                    </ul>
                </section>

                <section className="recent-activities">
                    <h2>Recent Activities</h2>
                    <ul>
                        <li>Field Trip to the Museum - September 25, 2024</li>
                        <li>Math Competition - September 18, 2024</li>
                        <li>Community Service Day - September 15, 2024</li>
                    </ul>
                </section>

                <section className="announcements">
                    <h2>Announcements</h2>
                    <p>Winter break will start on December 20, 2024, and end on January 5, 2025.</p>
                </section>
            </div>
        </div>
    );
}
