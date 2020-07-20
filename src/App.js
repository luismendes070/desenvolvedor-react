import React from 'react';
import avatar from './luis-brasilia-2014.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="App-logo" alt="logo" />
        <p>

          <a
              className="App-link"
              href="https://github.com/luismendes070"
              target="_blank"
              rel="noopener noreferrer"
          >
            GitHub  demos
            <h1>Luis Mendes Machado</h1>
          </a>
        </p>

      </header>
    </div>
  );
}

export default App;
