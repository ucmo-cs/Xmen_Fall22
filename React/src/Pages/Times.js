import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useState} from 'react';
import TimesButtons from "../Components/TimesButtons";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

function Times(){
    const { state } = useLocation();

    const [value, onChange] = useState(new Date());
    const [isShown, setIsShown] = useState(false);

    const [times, setTimes] = useState([
        { name: "9:00", value: false },
        { name: "10:00", value: false },
        { name: "11:00", value: false },
        { name: "12:00", value: false },
        { name: "1:00", value: false },
        { name: "2:00", value: false },
        { name: "3:00", value: false },
        { name: "4:00", value: false },
    ]);

    const handleClick = () => {
        setIsShown(true);
    };

    const changeValue = (name) => {
        const updatedTimes= times.map(obj => {
            if(obj.name === name && obj.value === false){
                return {...obj, value: true};
            }
            else {
                return {...obj, value: false};
            }
        });
        setTimes(updatedTimes);
    }

    let navigate = useNavigate();
    const routeChange = () =>{
        const passTime = times.filter(time => time.value === true);
        let path = `details`;
        navigate(path, {
            state: { state, passTime }
        });
    }

    return (
        <div className="times">

            <h2 className="times-header">What date works best for you?</h2>
            <div className="calendar-holder">
                <Calendar value={value} onChange={onChange} onClickDay={() => handleClick()} />
            </div>
            {isShown && (
                <div className="time-holder">
                    <h2>Select an available time: </h2>

                </div>
            )}

            <div className="buttons-times">
                {isShown && (
                    <div>
                        <TimesButtons times = {times} changeValue={changeValue}/>
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