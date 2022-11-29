import React from "react";
import logo from "../Photos/commerce_photo.jpg";
import ServiceButtons from "../Components/ServiceButtons";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Home(){

    const [services, setServices] = useState([
        { name: "Checking Account", value: false },
        { name: "Mortgage", value: false },
        { name: "Credit Card", value: false },
        { name: "Savings Account", value: false },
        { name: "Student Loans", value: false },
        { name: "Retirement", value: false },
        { name: "Investment Account", value: false },
        { name: "Auto Loans", value: false },
        { name: "Other", value: false }
    ]);

    const changeValue = (name) => {
        const updatedServices = services.map(obj => {
            if(obj.name === name && obj.value === false){
                return {...obj, value: true};
            }
            else if(obj.name === name && obj.value === true) {
                return {...obj, value: false};
            }
            return obj;
        });
        setServices(updatedServices);
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        const passService = services.filter(service => service.value === true);
        let path = `location`;
        navigate(path, {
            state: { passService }
        });
    }

    return (
        <div className="home">
            <div className="home-header">
                <img src={logo} alt="commerce_photo" width="650" height="241" />
                <h3 id="home-header-text"> Please select the services we can help you with: </h3>
            </div>

            <div>
                <ServiceButtons services={services} changeValue={changeValue}/>
            </div>

            <div className="home-comment-area">
                <textarea id="home-commentBox" placeholder="Please enter any additional information" />
            </div>

            <div className="home-continue">
                <Button variant="primary" onClick={routeChange}>Continue</Button>
            </div>
        </div>
    );
}

export default Home;