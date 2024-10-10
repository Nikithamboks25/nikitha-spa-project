import React from "react";
import download from "./../Assets/download.jpg"; // Adjust the path as necessary
import "./Home.css"; 

function Home() {
    return (
        <div>
        <h1 className="intro-heading">Welcome to EduTech</h1>
        <p className="intro-paragraph">
            Unlock your potential with our comprehensive tutorials designed to help you master basic computer skills.
        </p>
        <div className="grid-container">
            <div className="text-section">
                <h1>What You Can Expect:</h1>
                <p>Interactive Tutorials: Dive into our user-friendly tutorials tailored for all skill levels.</p>
                <p>Helpful Resources: Access a wealth of articles, videos, and tips to enhance your learning experience.</p>
                <p>Community Support: Join our vibrant community of learners and educators, share your experiences, and ask questions.</p>
            </div>
            <div className="image-section">
                <img src={download} alt="Description of the image" />
            </div>
        </div>
        </div>
    );
}

export default Home;
