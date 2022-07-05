import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/card/Card'
import { useAuth } from '../../context/authContext'


export default function HomePage() {

  const { user, logout, loading } = useAuth()

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.log('error')
    }

  }

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <Card header="Home" title="Home Main">
      {`Bienvenido ${user?.displayName || user?.email}`}
      <br />
      <Button onClick={handleLogout} variant="dark">cerrar session</Button>

    </Card>
  )
}
