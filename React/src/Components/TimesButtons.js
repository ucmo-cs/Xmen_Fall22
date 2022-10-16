import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const TimesButtons = () => {
    const [time1, setTime1] = useState(false);
    const [time2, setTime2] = useState(false);
    const [time3, setTime3] = useState(false);
    const [time4, setTime4] = useState(false);
    const [time5, setTime5] = useState(false);
    const [time6, setTime6] = useState(false);
    const [time7, setTime7] = useState(false);
    const [time8, setTime8] = useState(false);

    return (
        <div className="times-buttons-container">

                <button onClick={() => setTime1(!time1)} className={'toggle-btn ' + (time1 ? 'toggle-close':'')}>
                    9:00 AM
                </button>
                <button onClick={() => setTime2(!time2)} className={'toggle-btn ' + (time2 ? 'toggle-close':'')}>
                    10:00 AM
                </button>
                <button onClick={() => setTime3(!time3)} className={'toggle-btn ' + (time3 ? 'toggle-close':'')}>
                    11:00 AM
                </button>



                <button onClick={() => setTime4(!time4)} className={'toggle-btn ' + (time4 ? 'toggle-close':'')}>
                    12:00 PM
                </button>
                <button onClick={() => setTime5(!time5)} className={'toggle-btn ' + (time5 ? 'toggle-close':'')}>
                    1:00 PM
                </button>
                <button onClick={() => setTime6(!time6)} className={'toggle-btn ' + (time6 ? 'toggle-close':'')}>
                    2:00 PM
                </button>

                <button onClick={() => setTime7(!time7)} className={'toggle-btn ' + (time7 ? 'toggle-close':'')}>
                    3:00 PM
                </button>
                <button onClick={() => setTime8(!time8)} className={'toggle-btn ' + (time8 ? 'toggle-close':'')}>
                    4:00 PM
                </button>


        </div>

    );
}

export default TimesButtons;