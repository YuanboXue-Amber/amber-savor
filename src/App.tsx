import React from 'react';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import url from './strapi/URL';

function App() {
  axios.get(`${url}/recipes`).then(
    (response: AxiosResponse) =>
    console.log(response.data)
  );
  axios.get(`${url}/tags`).then(
    (response: AxiosResponse) =>
    console.log(response.data)
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
