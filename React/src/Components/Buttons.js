import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Buttons = () => {
    const [check, setcheck] = useState(false);
    const [mort, setmort] = useState(false);
    const [cc, setcc] = useState(false);
    const [save, setsave] = useState(false);
    const [student, setstudent] = useState(false);
    const [retire, setretire] = useState(false);
    const [invest, setinvest] = useState(false);
    const [auto, setauto] = useState(false);
    const [other, setother] = useState(false);

  return (
    <div className="services-buttons-container">
      <div className="services-buttons">
          <button onClick={() => setcheck(!check)} className={'toggle-btn ' + (check ? 'toggle-close':'')}>
          Checking Account
          </button>
          <button onClick={() => setmort(!mort)} className={'toggle-btn ' + (mort ? 'toggle-close':'')}>
          Mortgage
          </button>
          <button onClick={() => setcc(!cc)} className={'toggle-btn ' + (cc ? 'toggle-close':'')}>
          Credit Card
          </button>
      </div>

        <div className="services-buttons">
          <button onClick={() => setsave(!save)} className={'toggle-btn ' + (save ? 'toggle-close':'')}>
            Savings Account
          </button>
          <button onClick={() => setstudent(!student)} className={'toggle-btn ' + (student ? 'toggle-close':'')}>
            Student Loans
          </button>
          <button onClick={() => setretire(!retire)} className={'toggle-btn ' + (retire ? 'toggle-close':'')}>
            Retirement
          </button>
        </div>

      <div className="services-buttons">
        <button onClick={() => setinvest(!invest)} className={'toggle-btn ' + (invest ? 'toggle-close':'')}>
          Investment Account
        </button>
        <button onClick={() => setauto(!auto)} className={'toggle-btn ' + (auto ? 'toggle-close':'')}>
          Auto Loans
        </button>
        <button onClick={() => setother(!other)} className={'toggle-btn ' + (other ? 'toggle-close':'')}>
          Other
        </button>
      </div>

    </div>

  );
}

export default Buttons;
