import React, { useState } from 'react'
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap'

export default function ExpFormComponent() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridRole">
          <Form.Label>Ruolo</Form.Label>
          <Form.Control placeholder="Inserisci il ruolo" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCompany">
          <Form.Label>Datore di lavoro</Form.Label>
          <Form.Control placeholder="Inserisci l'azienda" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridStartDate">
          <Form.Label>A partire dal</Form.Label>
          <Form.Control 
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEndDate">
          <Form.Label>Fino al </Form.Label>
          <Form.Control 
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridArea">
          <Form.Label>Luogo</Form.Label>
          <Form.Control placeholder='Luogo di lavoro'/>
        </Form.Group>
      </Row>

      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Descrizione">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>

      <Button variant="primary" type="submit">
        Aggiungi un'esperienza
      </Button>
    </Form>
  )
}
