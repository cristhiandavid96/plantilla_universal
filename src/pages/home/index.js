import React from 'react'
import Card from '../../components/card/Card'
import { useAuth } from '../../context/authContext'


export default function HomePage() {

  const { user } = useAuth()
  
  return (
    <Card header="Home" title="Home Main">
      {`Bienvenido ${user.email}`}
    </Card>
  )
}
