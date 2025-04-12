import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'


export default function ExpFormComponent() {
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

      <Form.Group className="mb-3" controlId="formGridStartDate">
        <Form.Label>A partire dal</Form.Label>
        <Form.Control placeholder="Data di inizio" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridEndDate">
        <Form.Label>Fino al </Form.Label>
        <Form.Control placeholder="Data di fine servizio" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridArea">
          <Form.Label>Luogo</Form.Label>
          <Form.Control placeholder='Luogo di lavoro'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
