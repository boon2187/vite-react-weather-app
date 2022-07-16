import { useState } from 'react';
import axios from 'axios';

import Title from './components/Title.jsx'
import Form from './components/Form.jsx'
import Results from './components/Results'

import './App.css'


function App() {
  // Formから持ってきた元「FormのデータをAPIに送るためにstateに取っておく」部分
  const [city ,setCity] =useState("");

  // Formから思ってきた元「axiosを使ってAPIに都市名を送る」部分
  const getWeather = (e) => {
      e.preventDefault();
      axios.get("https://api.weatherapi.com/v1/current.json?key=0be11468eae249b0b82234208221507&q=London&aqi=no").then(res => console.log(res))

  }

  return (
    <div className="App">
      <Title />
      <Form />
      <Results />
    </div>
  )
}

export default App
