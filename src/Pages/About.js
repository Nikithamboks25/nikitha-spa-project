import React from 'react';
import './About.css'; // Import your CSS file

function About() {
    return (
        <div className="about-container">
            <h1 className="centered-heading">About Us</h1>
            <p>
                At EduTech, we believe whether you're a complete beginner or looking to refresh your skills, 
                our step-by-step guides and engaging lessons make learning easy and enjoyable.
                From understanding computer basics to navigating software applications, we have got you covered!
            </p>

            <h2 className="centered-heading">Vision</h2>
            <p>
                Our vision is to empower individuals with the skills and knowledge necessary to thrive in the digital age, 
                fostering a culture of continuous learning and innovation.
            </p>

            <h2 className="centered-heading">Mission</h2>
            <p>
                Our mission is to provide accessible, high-quality educational resources that inspire and equip learners 
                of all backgrounds to achieve their goals and realize their potential.
            </p>
        </div>
    );
}

export default About;
