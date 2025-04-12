import React from "react";
import { Card, Image, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProfileCard.css"; // Assicurati di avere questo file CSS per gli stili personalizzati

const ProfileCard = ({user}) => {
    

    return (

    <Container>
        <Row className="justify-content-center mt-4">
            <Card xs={2} md={8} className="position-relative shadow overflow-hidden rounded-4 p-0 profile-card" >
                <div style={{ height: "33%", background: "#d0dde2" }} />

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
                <Card.Body className="profile-card-body">
                    <Card.Title className="mb-0 fw-bold">
                        {user.name} {user.surname}
                    </Card.Title>
                    <Card.Subtitle className="text-muted mb-2">
                        {user.bio}
                    </Card.Subtitle>
                    <Card.Text style={{ fontSize: "0.9rem" }}>
                        {user.area}
                        <a href="#contatti" className="ms-2">Informazioni di contatto</a>
                    </Card.Text>
                    <Card.Text className="text-primary" style={{ fontSize: "0.85rem" }}>
                        108 collegamenti
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    </Container>

    );
};

export default ProfileCard;

