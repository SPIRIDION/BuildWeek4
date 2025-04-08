import React, { useEffect, useState } from "react"
import ProfileCard from "./ProfileCard"
import EsperienzeComponent from "./EsperienzeComponent"

export default function MyProfileComponent() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API = import.meta.env.VITE_APIURL
  const TOKEN = import.meta.env.VITE_KEY
  const MY_ID = import.meta.env.VITE_MYID

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const res = await fetch(`${API}/${MY_ID}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        })

        if (!res.ok) {
          setError("Errore nel caricamento del profilo")
          return
        }

        const data = await res.json()
        setProfile(data)
      } catch (error) {
        setError("Errore: " + error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMyProfile()
  }, [])

  return (
    <>
      {error && <p>{error}</p>}
      {profile && (
        <>
          <ProfileCard user={profile} />
          <EsperienzeComponent userId={MY_ID} />
        </>
      )}
    </>
  )
}