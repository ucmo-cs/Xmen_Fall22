import 'bootstrap/dist/css/bootstrap.css';

const Buttons = ({ services, changeValue }) => {

    return (
    <div className="services-buttons-container">
      <div className="services-buttons">
          <button onClick={() => changeValue(services[0].name)} className={'toggle-btn ' + (services[0].value ? 'toggle-close':'')}>
          Checking Account
          </button>
          <button onClick={() => changeValue(services[1].name)} className={'toggle-btn ' + (services[1].value ? 'toggle-close':'')}>
          Mortgage
          </button>
          <button onClick={() => changeValue(services[2].name)} className={'toggle-btn ' + (services[2].value ? 'toggle-close':'')}>
          Credit Card
          </button>
      </div>

        <div className="services-buttons">
          <button onClick={() => changeValue(services[3].name)} className={'toggle-btn ' + (services[3].value ? 'toggle-close':'')}>
            Savings Account
          </button>
          <button onClick={() => changeValue(services[4].name)} className={'toggle-btn ' + (services[4].value ? 'toggle-close':'')}>
            Student Loans
          </button>
          <button onClick={() => changeValue(services[5].name)} className={'toggle-btn ' + (services[5].value ? 'toggle-close':'')}>
            Retirement
          </button>
        </div>

      <div className="services-buttons">
        <button onClick={() => changeValue(services[6].name)} className={'toggle-btn ' + (services[6].value ? 'toggle-close':'')}>
          Investment Account
        </button>
        <button onClick={() => changeValue(services[7].name)} className={'toggle-btn ' + (services[7].value ? 'toggle-close':'')}>
          Auto Loans
        </button>
        <button onClick={() => changeValue(services[8].name)} className={'toggle-btn ' + (services[8].value ? 'toggle-close':'')}>
          Other
        </button>
      </div>

    </div>

  );
}

export default Buttons;
