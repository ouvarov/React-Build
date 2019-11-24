// @flow

import React from 'react';
import logo from './logo.svg';
import './App.sass';

const getArray = () => {
    const array = fetch('https://drive.google.com/open?id=193Tn_sphaeTOC-KvGtfvLpif7lE9MLxA');
    const arrayJson = array.text;

    console.log(arrayJson);
};
getArray();
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
