import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardMain({ header, title, children, className }) {

    return (
        <Card className={className}>
            <Card.Header>{header}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {children}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
