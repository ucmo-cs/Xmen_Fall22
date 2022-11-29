import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useState, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import TimesButtons from "../Components/TimesButtons";

function Times(){
    const { state } = useLocation();

    const [isShown, setIsShown] = useState(false);

    const [radioValue, setRadioValue] = useState('0');

    let curr = [];

    const [r1, setR1] = useState([
        { name: '9:00', value: '1', avail: true },
        { name: '10:00', value: '2', avail: true },
        { name: '11:00', value: '3', avail: true },
        { name: '12:00', value: '4', avail: true },
        { name: '1:00', value: '5', avail: true },
        { name: '2:00', value: '6', avail: true },
        { name: '3:00', value: '7', avail: true },
        { name: '4:00', value: '8', avail: true }
    ]);

    let radios = [
        { name: '9:00', value: '1', avail: true },
        { name: '10:00', value: '2', avail: true },
        { name: '11:00', value: '3', avail: true },
        { name: '12:00', value: '4', avail: true },
        { name: '1:00', value: '5', avail: true },
        { name: '2:00', value: '6', avail: true },
        { name: '3:00', value: '7', avail: true },
        { name: '4:00', value: '8', avail: true }
    ];

    let date = new Date().toLocaleDateString();

    const [d1, setD1] = useState(date);
    const [theResponse, setResponse] = useState([]);

    useEffect(() => {
        getAppointments();
    },[]);

    useEffect(() => {
        console.log(d1)
    },[d1]);

    useEffect(() => {
        console.log(r1);
    },[r1]);

    const changeAvailable = () => {
        console.log(curr);
            for(let i = 0; i < curr.length; i++) {
                if (curr[i].time === radios[0].name) {
                    radios[0].avail = false;
                } else if (curr[i].time === radios[1].name) {
                    radios[1].avail = false;
                } else if (curr[i].time === radios[2].name) {
                    radios[2].avail = false;
                } else if (curr[i].time === radios[3].name) {
                    radios[3].avail = false;
                } else if (curr[i].time === radios[4].name) {
                    radios[4].avail = false;
                } else if (curr[i].time === radios[5].name) {
                    radios[5].avail = false;
                } else if (curr[i].time === radios[6].name) {
                    radios[6].avail = false;
                } else if (curr[i].time === radios[7].name) {
                    radios[7].avail = false;
                }
            }
            setR1(radios);
            console.log(radios);
    }

    const getAppointments = async () => {
        let arr = [];

        let response = await fetch('http://localhost:8080/getAppointments', {
            method: 'GET',
            headers:{"Content-Type" : "application/json"},
        });

        let data = await response.json();

        Object.keys(data).forEach(function(key) {
            arr.push(data[key])
        });
        setResponse(arr);
    }

    const handleClick = (value) => {
        date = value.toLocaleDateString();
        console.log(date);
        curr = theResponse.filter(app => app.date === date);
        setD1(date);
        changeAvailable();
        setIsShown(true);
    };

    let navigate = useNavigate();
    const routeChange = () => {
        const passTime = radios.filter(radio => radio.value === radioValue);
        let path = `details`;
        navigate(path, {
            state: { state, passTime , d1 }
        });
    }

    return(
        <div className="times">
            <h2 className="times-header">What date works best for you?</h2>
            <div className="calendar-holder">
                <Calendar onClickDay={(value) => handleClick(value)} />
            </div>
            {isShown && (
                <div className="time-holder">
                    <h2>Select an available time: </h2>
                </div>
            )}

            <div className="buttons-times">
                {isShown && (
                    <div>
                        <TimesButtons radioValue={radioValue} setRadioValue={setRadioValue} radios={r1} />
                        <div className="submit-time-button">
                            <Button variant="primary" size="lg" onClick={routeChange}>
                                Continue
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Times;