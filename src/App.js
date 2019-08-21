import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './router';
import Main from './main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
