import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export default function RegisterForm() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState();


    const { signup } = useAuth()

    const navigate = useNavigate

    const handleChange = (e) => {
        setUser({
            ...user,        // copia el objeto user
            [e.target.name]: e.target.value, // actualiza el valor de la propiedad name     
        });
    }


    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            await signup(user.email, user.password);
            navigate('/home');
        } catch (error) {
            setError(error.message)
        }

    }

    return (
        <div>
            {error && <p>{error}</p>}
            <Form onSubmit={handlesubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handleChange} name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>

    )
}
