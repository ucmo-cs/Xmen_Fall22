import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Confirm(){
    return (
        <div className="confirm">
            <h2 className="confirm-header">Appointment Information</h2>
            <div className="confirm-text">
                <p>Thank you for scheduling {' '}. Here are the details of your appointment.</p>
            </div>
            <div className="confirm-info">
                <Card
                    bg="light"
                    border="success"
                    style={{ width: '13.5rem', height:"250px"}}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title> When: </Card.Title>
                        <Card.Text>
                            <p> {' '} </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    bg="light"
                    border="success"
                    style={{ width: '13.5rem', height:"250px", marginLeft:"20px"}}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title> Where: </Card.Title>
                        <Card.Text>
                            <p> {' '} </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    bg="light"
                    border="success"
                    style={{ width: '13.5rem', height:"250px", marginLeft:"20px"}}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title> Services: </Card.Title>
                        <Card.Text>
                            <p> {' '} </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="confirm-button-holder">
                <Button variant="success" >Confirm</Button>
                <Button variant="danger" >Cancel</Button>
            </div>
        </div>
    );
}

export default Confirm;