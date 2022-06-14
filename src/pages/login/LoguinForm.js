import React, { useState } from 'react'
import { Form, Button,Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext'

export default function LoguinForm() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState()

    const { singUp } = useAuth();

    const handleChange = (e) => {
        setUser({
            ...user,        // copia el objeto user
            [e.target.name]: e.target.value, // actualiza el valor de la propiedad name     
        });
    }
    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {

            await singUp(user.email, user.password)
            navigate('home')

        } catch (error) {
            console.log(error)
            let errorMesassage=""

            if(error.code === "auth/missing-email" || error.code === "auth/invalid-email"){
                errorMesassage = "correo invalido"
            }else if(error.code === "auth/weak-password"){
                errorMesassage = "contraseña debil, debe tener almenos 6 caracteres"
            }else{
                errorMesassage = error
            }

            setError(errorMesassage)
        }
    }
    //console.log("LoguinForm",user)

    return (
        <div>

        {error && <Alert variant='danger' >{error}</Alert>}

        <Form onSubmit={handlesubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" name="email" onChange={handleChange} placeholder="Enter email" />
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
