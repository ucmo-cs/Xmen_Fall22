import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useLocation} from "react-router-dom";

function Confirm(){
    const { state } = useLocation();
    console.log(state.state.state.place);
    console.log(state.state.passTime[0]);
    console.log(state.state.state.state.passService);
    console.log((state.state.date));
    console.log(state.firstName);

    let namedLocation = '';
    let namedServices = '';
    const location = state.state.state.place;
    const time = state.state.passTime[0].name.toString();
    const services = state.state.state.state.passService;
    const date = state.state.date.toLocaleDateString();
    const fName = state.firstName;
    const lName = state.lastName;

    for(let i=0; i<services.length; i++){
        if(i !== services.length - 1)
            namedServices = namedServices + services[i].name + ',\n';
        else
            namedServices = namedServices + services[i].name;
    }

    if(location == 1){
        namedLocation = 'Centerview'
    }
    else
        namedLocation = 'Tractors Pass'

    return (
        <div className="confirm">
            <h2 className="confirm-header">Appointment Information</h2>
            <div className="confirm-text">
                <p>Thank you for scheduling {fName}  {lName}. Here are the details of your appointment.</p>
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
                            <p> {date} </p>
                            <p> {time} </p>
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
                            <p> {namedLocation} </p>
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
                            <p> {namedServices} </p>
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