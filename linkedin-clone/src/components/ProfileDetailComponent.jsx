import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner, Card } from 'react-bootstrap';

export default function ProfileDetailComponent() {
  const { id } = useParams(); // Ottieni l'ID dell'utente dal parametro dell'URL
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfileDetails = async () => {
    setError(null);
    try {
      const response = await fetch(`${import.meta.env.VITE_APIURL }/${id}`, {
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
      setProfile(data);
    } catch (error) {
      setError(`Si è verificato un errore: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileDetails();
  }, [id]);

  return (
    <Container>
      <h2>Dettagli Utente</h2>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <div className="text-center">
          <h4>Errore: {error}</h4>
        </div>
      ) : (
        profile && (
          <Card>
            <Card.Body>
              <Card.Title>{profile.name} {profile.surname}</Card.Title>
              <Card.Text>
                <strong>Lavoro:</strong> {profile.job} <br />
                <strong>Azienda:</strong> {profile.company} <br />
        
              </Card.Text>
            </Card.Body>
          </Card>
        )
      )}
    </Container>
  );
}
