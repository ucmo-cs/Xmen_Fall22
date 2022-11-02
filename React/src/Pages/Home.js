import React from "react";
import logo from "../Photos/commerce_photo.jpg";
import Buttons from "../Components/Buttons";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Home(){

    const [services, setServices] = useState([
        { name: "check", value: false },
        { name: "mort", value: false },
        { name: "cc", value: false },
        { name: "save", value: false },
        { name: "student", value: false },
        { name: "retire", value: false },
        { name: "invest", value: false },
        { name: "auto", value: false },
        { name: "other", value: false },
        { name: "Location", value: true },
        { name: "Time", value: true }
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
                <Buttons services={services} changeValue={changeValue}/>
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