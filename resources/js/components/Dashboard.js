// src/components/DashboardLayout.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are applied
import '../../sass/Dashboard.scss'; // Adjust path to your SCSS file if needed
import Calendar from 'react-calendar'; // Import the calendar component
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

export default function DashboardLayout() {
    const [date, setDate] = useState(new Date()); // State to manage selected date

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-inverse visible-xs">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">School Logo</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#dashboard">Dashboard</a></li>
                            <li><a href="#students">Students</a></li>
                            <li><a href="#classes">Classes</a></li>
                            <li><a href="#teachers">Teachers</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="row content">
                <div className="col-sm-3 sidenav hidden-xs">
                    <h2>School Management</h2>
                    <ul className="nav nav-pills nav-stacked">
                        <li className="active"><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#students">Students</a></li>
                        <li><a href="#classes">Classes</a></li>
                        <li><a href="#teachers">Teachers</a></li>
                        <li><a href="#reports">Reports</a></li>
                    </ul>
                    <br />
                </div>

                <div className="col-sm-9">
                    <div className="well">
                        <h4>Dashboard Overview</h4>
                        <p>Welcome to the school management dashboard! Here you can monitor student enrollment, class schedules, and teacher assignments.</p>
                    </div>
                    <div className="row statistics">
                        <div className="col-sm-3">
                            <div className="well">
                                <h4>Total Students</h4>
                                <p>1,200</p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="well">
                                <h4>Total Classes</h4>
                                <p>40</p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="well">
                                <h4>Total Teachers</h4>
                                <p>60</p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="well">
                                <h4>Recent Enrollments</h4>
                                <p>25</p>
                            </div>
                        </div>
                    </div>

                    <h4>Recent Activities</h4>
                    <div className="row activities">
                        <div className="col-sm-4">
                            <div className="well activity">
                                <h5>New Enrollment</h5>
                                <p>25 new students enrolled this month.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="well activity">
                                <h5>Class Performance</h5>
                                <p>Average score: 88% in final exams.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="well activity">
                                <h5>Upcoming Events</h5>
                                <p>Parent-Teacher Conference on April 10.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row activities">
                        <div className="col-sm-4">
                            <div className="well activity">
                                <h5>Extracurricular Activities</h5>
                                <p>New clubs formed: Science Club, Art Club.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="well activity">
                                <h5>School Trips</h5>
                                <p>Field trip to the Science Museum scheduled for May 5.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="well activity">
                                <h5>Attendance Rate</h5>
                                <p>Average attendance: 95% this semester.</p>
                            </div>
                        </div>
                    </div>

                    <h4>Calendar</h4>
                    <div className="calendar-container">
                        <Calendar 
                            onChange={setDate} // Set the selected date
                            value={date} // Display the currently selected date
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
