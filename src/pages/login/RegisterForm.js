import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function RegisterForm() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,        // copia el objeto user
            [e.target.name]: e.target.value, // actualiza el valor de la propiedad name     
        });
    }

    //console.log("RegisterForm",user)

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("RegisterForm",user)
    }
    
    return (
        <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" onChange={handleChange}  placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={handleChange} name="password"  placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    )
}
