import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileCard = () => {

    const [userData, setUserData] = useState([])

    useEffect(() => {
       
        const fetchUserData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_APIURL + "me", {
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_KEY}`,
                    }
                });
                const data = await response.json();
                console.log(data);
                setUserData(data)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <Card xs={12} md={8} className="position-relative shadow" style={{ borderRadius: "1rem", overflow: "hidden" }}>
            <div style={{ height: "120px", background: "#d0dde2" }} />

            {/* Immagine Profilo */}
            <div style={{ position: "absolute", top: "60px", left: "20px" }}>
                <div style={{ position: "relative" }}>
                    <Image
                        src={userData.image}
                        roundedCircle
                        style={{ border: "4px solid white", width: "100px", height: "100px" }}
                    />
                </div>
            </div>

            <Card.Body style={{ paddingTop: "60px", paddingLeft: "140px" }}>
                <Card.Title className="mb-0 fw-bold">
                    {userData.name} {userData.surname}
                </Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                    {userData.bio}
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "0.9rem" }}>
                    {userData.area}
                    <a href="#contatti">Informazioni di contatto</a>
                </Card.Text>
                <Card.Text className="text-primary" style={{ fontSize: "0.85rem" }}>
                    108 collegamenti
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;

