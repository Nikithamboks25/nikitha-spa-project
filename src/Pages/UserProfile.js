import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';
import profilePicture from './../Assets/profilePicture.jpg';
import profilePicture2 from './../Assets/profilePicture2.jpg';
import profilePicture3 from './../Assets/profilePicture3.jpg';


const users = [
    {
        username: "nikitha",
        name: "Nikitha Mbokotwana",
        university: "University of Cape Town",
        studentNumber: "123456",
        subscribedTutorials: ["Introduction to Computers", "Basic Excel Skills"],
        profilePicture: profilePicture
    },
    {
        username: "sonwabiso",
        name: "Sonwabiso Maloni",
        university: "Harvard University",
        studentNumber: "654321",
        subscribedTutorials: ["Advanced Computer Basics", "Software Components"],
        profilePicture: profilePicture2
    },
    {
        username: "du-wayne",
        name: "Du-Wayne Frieslaar",
        university: "Stanford University",
        studentNumber: "789012",
        subscribedTutorials: ["Data Science", "Web Development"],
        profilePicture: profilePicture3
    }
];

function UserProfile() {
    const { username } = useParams();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call delay
            const user = users.find(user => user.username === username);

            if (user) {
                setUserData(user);
            } else {
                setError('User not found');
            }
            setLoading(false);
        };

        fetchData();
    }, [username]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="user-profile">
            <div className="profile-picture">
                <img src={userData.profilePicture} alt={`${userData.name}'s profile`} />
            </div>
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
