import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/Button";

const TimesButtons = ({radioValue, setRadioValue, radios}) => {
    console.log(radios);
    return(

        <div className="newButtons-container">
            { radios.map((radio, idx) => {
                if(radio.avail === true)
                    return <ToggleButton
                        className={'radios'}
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="outline-dark"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                else
                    return <Button variant="secondary" className="radios" disabled> {radio.name} </Button>

            })}
        </div>
    )
}

export default TimesButtons;

