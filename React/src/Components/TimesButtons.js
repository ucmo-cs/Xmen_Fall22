import 'bootstrap/dist/css/bootstrap.css';

const TimesButtons = ({times, changeValue}) => {

    return (
        <div className="times-buttons-container">

                <button onClick={() => changeValue(times[0].name)} className={'toggle-btn ' + (times[0].value ? 'toggle-close':'')}>
                    9:00 AM
                </button>
                <button onClick={() => changeValue(times[1].name)} className={'toggle-btn ' + (times[1].value ? 'toggle-close':'')}>
                    10:00 AM
                </button>
                <button onClick={() => changeValue(times[2].name)} className={'toggle-btn ' + (times[2].value ? 'toggle-close':'')}>
                    11:00 AM
                </button>

                <button onClick={() => changeValue(times[3].name)} className={'toggle-btn ' + (times[3].value ? 'toggle-close':'')}>
                    12:00 PM
                </button>
                <button onClick={() => changeValue(times[4].name)} className={'toggle-btn ' + (times[4].value ? 'toggle-close':'')}>
                    1:00 PM
                </button>
                <button onClick={() => changeValue(times[5].name)} className={'toggle-btn ' + (times[5].value ? 'toggle-close':'')}>
                    2:00 PM
                </button>

                <button onClick={() => changeValue(times[6].name)} className={'toggle-btn ' + (times[6].value ? 'toggle-close':'')}>
                    3:00 PM
                </button>
                <button onClick={() => changeValue(times[7].name)} className={'toggle-btn ' + (times[7].value ? 'toggle-close':'')}>
                    4:00 PM
                </button>
                <button className={'toggle-btn'}>
                    .
                </button>
        </div>
    );
}

export default TimesButtons;