import React from 'react';
import photo_teacher from './photo_teacher.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
           Hello OS Subject
        </h1>
		<img src={photo_teacher} className="Photo-teacher" alt="photo_teacher" />
		<p>
           Teacher : Peerasak Pianprasit 
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/peerasakp"
          target="_blank"
          rel="Teacher P.Peerasak"
        >
          Link Facebook Contract
        </a>
      </header>
    </div>
  );
}

export default App;