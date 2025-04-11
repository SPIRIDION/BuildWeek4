import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function ProfileListComponent() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const fetchProfiles = async () => {
    setError(null); 

    try {
      const response = await fetch(import.meta.env.VITE_APIURL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
        },
      });

      if (!response.ok) {
        setError(`Errore nella richiesta: ${response.statusText} (${response.status})`);
        return;
      }

      const data = await response.json();
    //   console.log('Dati ricevuti:', data);
      setProfiles(data); 
    } catch (error) {
      setError(`Si è verificato un errore: ${error.message}`);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchProfiles(); 
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col xs={8} md={9}>
        
          <div className="main-content">
            <h2>Contenuti Principali</h2>
            <p>Questa è la sezione principale della tua applicazione.</p>
            {/* Puoi aggiungere altre informazioni o contenuti qui */}
          </div>
        </Col>
        <Col xs={4} md={3}>
          <div className="sidebar">
            <h5>Lista Utenti</h5>
            {loading && !error ? (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : error ? (
              <div className="text-center">
                <h4>Errore: {error}</h4>
              </div>
            ) : (
              <ul className="list-unstyled">
                {profiles.map((profile) => (
                  <li key={profile._id} className="mb-3">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={profile.image|| null}
                      />
                      <Card.Body>
                        <Card.Title>{profile.name},{profile.surname}</Card.Title>
                        <Card.Text>
                          <strong>Luogo:</strong> {profile.area} <br />
                          <strong>Bio:</strong> {profile.bio} <br />
                          <strong>Email:</strong> {profile.email}  <br />
                        </Card.Text>
                        <Link to={`/profile/${profile._id}`} className="btn btn-primary">
                          Vedi Dettagli
                        </Link>
                      </Card.Body>
                    </Card>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}


