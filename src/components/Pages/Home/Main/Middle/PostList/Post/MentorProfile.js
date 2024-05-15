

//MentorProfile.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import MentorNavbar from "./MentorNavbar";
import "./mentorProfile.css"; // Import CSS file

class MentorProfile extends Component {
  render() {
    return (
      <div className="mentor-profile">
        <div className="profile-section">
          {/* Mentor profile details */}
          <h2>Yasmini Gyawali</h2>
          <p>Hello! I am Yasmini.</p>
        </div>
        <div className="services-section">
          {/* Navbar for services */}
          <ServicesNavbar />
        </div>
        <div className="feedback-section">
          {/* Review and feedback by mentees */}
          <h3>Reviews and Feedback</h3>
          <div className="reviews-container">
            {/* Sample review box */}
            <div className="review-box">
              <h4>Review Title</h4>
              <p>Review content...</p>
            </div>
            {/* Add more review boxes as needed */}
          </div>
        </div>
      </div>
    );
  }
}

export default MentorProfile;
