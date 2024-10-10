import React, { useState, useEffect } from 'react';
import './UserProfile.css'; 

function UserProfile() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const user = {
                name: "Nikitha Mbokotwana",
                university: "University of Cape Town",
                studentNumber: "123456",
                subscribedTutorials: ["Introduction to Computers", "Basic Excel Skills"]
            };
            await new Promise(resolve => setTimeout(resolve, 1000));
            setUserData(user);
        };

        fetchData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-profile">
            <div className="card">
                <h1>User Profile</h1>
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>University:</strong> {userData.university}</p>
                <p><strong>Student Number:</strong> {userData.studentNumber}</p>
                <h2>Subscribed Tutorials:</h2>
                <ul>
                    {userData.subscribedTutorials.map((tutorial, index) => (
                        <li key={index}>{tutorial}</li>
                        
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserProfile;
