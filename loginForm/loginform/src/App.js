import logo from './logo.svg';
import React, {useState} from 'react';
import Basicform from './components/Form/Basicform';
import Navbar from './components/Navbar/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Basicform />
    </div>
  );
}

export default App;
