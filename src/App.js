import logo from './logo.svg';
import './App.css';
import React from "react";
import Welcome from "./components/welcome/Welcome";
import Name from "./components/Name";
import Student from "./components/student/Student";


function App() {
  return (
    <div  className="App">
      <header style={{backgroundColor:'white'}} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>

        <React.Fragment>
          <Welcome/>
          <Name std_id='101333371'/>
          <Name first_name={'Rauny'} last_name={'Martinelli'}/>
          <Student college='George Brown College'/>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
