import React, { useEffect, useState } from "react"
import { Spinner, Alert, Card, Row, Col, Container } from "react-bootstrap"
import ExpFormComponent from "./ExpFormComponent"

export default function EsperienzeComponent({ userId }) {
  const API = import.meta.env.VITE_APIURL
  const TOKEN = import.meta.env.VITE_KEY

  const [esperienze, setEsperienze] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchEsperienze = async () => {
    try {
      const res = await fetch(`${API}/${userId}/experiences`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })

      if (!res.ok) {
        setError("Errore nel caricamento delle esperienze")
        return
      }

      const data = await res.json()
      setEsperienze(data)
    } catch (error) {
      setError("Errore: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEsperienze()
  }, [userId])

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h4 className="mb-3">Esperienze</h4>

          {loading && (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}

          {error && <Alert variant="danger">{error}</Alert>}

          {!loading && !error && esperienze.length === 0 && (
            <Alert variant="warning">Nessuna esperienza disponibile.</Alert>
          )}

          <ExpFormComponent userId={userId} aggiornamentoExp={fetchEsperienze}/>

          {esperienze.map((exp) => (
            <Card className="mb-3 shadow-sm" key={exp._id}>
              <Card.Body>
                <Card.Title>{exp.role}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{exp.company}</Card.Subtitle>
                <Card.Text>
                  <strong>Periodo:</strong> {exp.startDate.slice(0, 10)} –{" "}
                  {exp.endDate ? exp.endDate.slice(0, 10) : "In corso"}
                  <br />
                  <strong>Descrizione:</strong> {exp.description}
                  <br />
                  <strong>Area:</strong> {exp.area}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  )
}