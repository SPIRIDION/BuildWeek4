import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileCard from './ProfileCard';

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
    <>
      {profile && <ProfileCard user={profile}/>}
    </>
  );
}
