import React, { useState } from 'react'
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap'

export default function ExpFormComponent({ userId, aggiornamentoExp }) {

  const API = import.meta.env.VITE_APIURL
  const TOKEN = import.meta.env.VITE_KEY

  const [newExperience, setNewExperience] = useState({
    role:'',
    company:'',
    startDate:'',
    endDate:'',
    description:'',
    area:''
  })

  const addExperience = async () => {
    try {
      const response = await fetch(API + `/${userId}/experiences`, {
        method:'POST', 
        body: JSON.stringify(newExperience),
        headers: {
          Authorization: `bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      })
      if (response.ok) {
        alert('Esperienza aggiunta!')
        aggiornamentoExp()
        setNewExperience({
          role:'',
          company:'',
          startDate:'',
          endDate:'',
          description:'',
          area:''
        })
      } else {
        console.log('Errore durante la fetch call')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form className='mb-5'>
      <Row>
        <Form.Group as={Col} controlId="formGridRole">
          <Form.Label>Ruolo</Form.Label>
          <Form.Control placeholder="Inserisci il ruolo"
            type='text'
            value={newExperience.role}
            onChange={(e) => setNewExperience({
              ...newExperience,
              role: e.target.value
            })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCompany">
          <Form.Label>Datore di lavoro</Form.Label>
          <Form.Control placeholder="Inserisci l'azienda" 
            type='text'
            value={newExperience.company}
            onChange={(e) => setNewExperience({
              ...newExperience,
              company: e.target.value
            })}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridStartDate">
          <Form.Label>A partire dal</Form.Label>
          <Form.Control 
            type="date"
            value={newExperience.startDate}
            onChange={(e) => setNewExperience({
              ...newExperience,
              startDate: e.target.value
            })}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEndDate">
          <Form.Label>Fino al </Form.Label>
          <Form.Control 
            type="date"
            value={newExperience.endDate}
            onChange={(e) => setNewExperience({
              ...newExperience,
              endDate: e.target.value
            })}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridArea">
          <Form.Label>Luogo</Form.Label>
          <Form.Control placeholder='Luogo di lavoro'
            type='text'
            value={newExperience.area}
            onChange={(e) => setNewExperience({
              ...newExperience,
              area: e.target.value
            })}
          />
        </Form.Group>
      </Row>

      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Descrizione">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          value={newExperience.description}
          onChange={(e) => setNewExperience({
            ...newExperience,
            description: e.target.value
          })}
          style={{ height: '100px' }}
        />
      </FloatingLabel>

      <Button variant="primary" type="button" onClick={addExperience}>
        Aggiungi un'esperienza
      </Button>
    </Form>
  )
}
