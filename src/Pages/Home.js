import React from "react";
import logo from "../Photos/commerce_photo.jpg";
import Buttons from "../Components/Buttons";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";



function Home(){
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `location`;
        navigate(path);
    }
    return (
        <div className="home">
            <div className="home-header">
                <img src={logo} alt="commerce_photo" width="650" height="241" />
                <h3 id="home-header-text"> Please select the services we can help you with: </h3>
            </div>

            <div>
                <Buttons />
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