import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useState} from 'react';
import TimesButtons from "../Components/TimesButtons";

function Times(){

    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => true);

    };

    return (
        <div className="times">

            <h2 className="times-header">What date works best for you?</h2>
            <div className="calendar-holder">
                <Calendar onClickDay={handleClick} />
            </div>
            {isShown && (
                <div className="time-holder">
                    <h2>Select an available time: </h2>
                </div>
            )}


            {isShown && <TimesButtons />}
        </div>
    );
}

export default Times;