import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Details(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `confirm`;
        navigate(path);
    }

    return (
        <div className="details">
            <h2 className="details-header">Just a few more details</h2>
            <div className="details-form">
                <Form>
                    <label className="details-label">First Name* <br />
                        <input className="details-textbox" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </label>
                    <label className="details-label">Last Name* <br />
                        <input className="details-textbox" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </label>
                    <label className="details-label">Email Address* <br />
                        <input className="details-textbox" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label className="details-label">Phone Number <br />
                        <input className="details-textbox" type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </label>

                    <Form.Check
                        type="switch"
                        className="details-switch"
                        id="details-switch1"
                        label="Email Consent"
                    />

                    <p className="details-switch-text">
                        <t />By checking, You are providing consent to receive email updates
                    </p>

                    <Form.Check
                        type="switch"
                        className="details-switch"
                        id="details-switch2"
                        label="Text Message Consent"
                    />
                    <p className="details-switch-text">
                        <t />By checking, You are providing consent to receive text updates
                    </p>
                </Form>
                <div className="details-confirm">
                    <Button variant="primary" onClick={routeChange}>Continue</Button>
                </div>
            </div>
        </div>
    );
}

export default Details;