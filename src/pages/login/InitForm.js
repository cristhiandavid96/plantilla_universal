import React, { useState } from 'react'
import { Form, Button, } from 'react-bootstrap'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
import CardMain from '../../components/card/Card'

const InitForm = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState();

    const navigate = useNavigate()

    const { login } = useAuth()

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await login(user.email, user.password);
            navigate('/home');
        } catch (error) {
            setError(error.message)
        }
    }

    const handleChange = (e) => {
        setUser({
            ...user,        // copia el objeto user
            [e.target.name]: e.target.value, // actualiza el valor de la propiedad name     
        });
    }

    return (
        <CardMain title={'Formulario Registro'} header='Registro'>
            {error && <p>{error}</p>}
            <Form onSubmit={handlesubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handleChange} name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Loguin
                </Button>
            </Form>
        </CardMain>
    )
}

export default InitForm