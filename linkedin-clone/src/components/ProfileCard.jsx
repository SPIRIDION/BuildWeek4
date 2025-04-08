import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileCard = ({user}) => {
    

    return (
        <Card xs={12} md={8} className="position-relative shadow" style={{ borderRadius: "1rem", overflow: "hidden" }}>
            <div style={{ height: "120px", background: "#d0dde2" }} />

            {/* Immagine Profilo */}
            <div style={{ position: "absolute", top: "60px", left: "20px" }}>
                <div style={{ position: "relative" }}>
                    <Image
                        src={user.image}
                        roundedCircle
                        style={{ border: "4px solid white", width: "100px", height: "100px" }}
                    />
                </div>
            </div>

            <Card.Body style={{ paddingTop: "60px", paddingLeft: "140px" }}>
                <Card.Title className="mb-0 fw-bold">
                    {user.name} {user.surname}
                </Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                    {user.bio}
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "0.9rem" }}>
                    {user.area}
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

