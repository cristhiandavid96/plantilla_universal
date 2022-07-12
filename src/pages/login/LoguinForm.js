import React, { useState } from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'
import CardMain from '../../components/card/Card'
import GoogleAuth from '../../assets/images/GoogleAuth';
import './login.css'

export default function LoguinForm() {

    const { loginWithGoogle } = useAuth()

    const navigate = useNavigate()

    const [error, setError] = useState();


    const registro = (e) => {
        navigate('/registro')
    }

    const iniciar = (e) => {
        navigate('/initial')
    }


    const handleGoogleSignin = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await loginWithGoogle();
            navigate('/home');
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="imageform">
            <Container>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4} className="loginform">
                        <CardMain header='Iniciar session con ' className='cardLogin'>
                            {error && <p>{error}</p>}
                            <br />
                            <div className="d-grid gap-2">
                                <Button variant="outline-danger" type="button" large onClick={handleGoogleSignin}  >
                                    Iniciar sesión con     :
                                    <GoogleAuth />
                                </Button>
                                <br /><br />
                                <Button variant="outline-primary" type="button" onClick={registro}>
                                    Registrarme
                                </Button>
                                <hr />
                                <Button variant="outline-primary" type="button" onClick={iniciar}>
                                    Iniciar sesión
                                </Button>
                            </div>
                        </CardMain>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
