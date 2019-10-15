import React from 'react';
import logo from './logo_partner.jpeg';
import photo_teacher from './photo_teacher.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<h1>
          Subject 88832359-OS
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
		<p>
          Hello Peerasak Pianprasit
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/peerasakp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link Teacher's Facebook 
        </a>
      </header>
    </div>
  );
}

export default App;
