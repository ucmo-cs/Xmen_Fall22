import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

const Buttons = () => {
  const [checked, setChecked] = useState(false);

  const toggle = () =>{
    setChecked(!checked);
  }
  const radios = [
      { name: 'Active', value: '1' },
      { name: 'Radio', value: '2' },
      { name: 'Radio', value: '3' },
    ];
  return (
    <div className="body1">
      <div className="buttons1">
          <button onClick={toggle} className={'toggle-btn ' + (checked ? 'toggle-close':'')}>
          Checking Account
          </button>
          <button onClick={toggle} className={'toggle-btn ' + (checked ? 'toggle-close':'')}>
          Mortgage
          </button>
          <button onClick={toggle} className={'toggle-btn ' + (checked ? 'toggle-close':'')}>
          Credit Card
          </button>
      </div>

        <div className="buttons1">
          <button onClick={toggle} className={'toggle-btn ' + (checked ? 'toggle-close':'')}>
            Savings Account
          </button>
          <button onClick={toggle} className={'toggle-btn ' + (checked ? 'toggle-close':'')}>
            Student Loans
          </button>
          <button onClick={toggle} className={'toggle-btn ' + (checked ? 'toggle-close':'')}>
            Retirement
          </button>
        </div>

      <div className="buttons1">
        <button onClick={toggle} className={'toggle-btn ' + (checked ? 'toggle-close':'')}>
          Investment Account
        </button>
        <button onClick={toggle} className={'toggle-btn ' + (checked ? 'toggle-close':'')}>
          Auto Loans
        </button>
        <button onClick={toggle} className={'toggle-btn ' + (checked ? 'toggle-close':'')}>
          Other
        </button>
      </div>

    </div>

  );
}

export default Buttons;
