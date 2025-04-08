import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import MyEsperienzeComponent from "./MyEsperienzeComponent"
import ProfileListComponent from "./ProfileListComponent"

export default function HomePageComponent() {
  return (
    <Container fluid>
      <Row>
        {/* Colonna sinistra: il tuo profilo con esperienze */}
        <Col xs={12} md={8}>
          <MyEsperienzeComponent />
        </Col>

        {/* Colonna destra: lista utenti */}
        <Col xs={12} md={4}>
          <ProfileListComponent />
        </Col>
      </Row>
    </Container>
  )
}