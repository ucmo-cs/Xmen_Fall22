import logo from './Photos/commerce_photo.jpg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Buttons from './Components/Buttons';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="commerce_photo" width="650" height="241" />
        <h3 id="text1"> Please select the services we can help you with: </h3>
      </header>

      <body id="bod1">
        <Buttons />
      </body>

      <div className="comment">
      <textarea className="comment" id="input" placeholder="Please enter any additional information" />
      </div>

      <div className="btn1">
      <Button variant="primary">Continue</Button>
      </div>

    </div>

  );
}

export default App;
