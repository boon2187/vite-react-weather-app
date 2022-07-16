// Form.jsx

import { useState } from 'react';
import axios from 'axios';

// 都市名LondonでもらったURLを、テスト用にとりあえず保存しておく
// "https://api.weatherapi.com/v1/current.json?key=0be11468eae249b0b82234208221507&q=London&aqi=no"

const Form = () => {

    // FormのデータをAPIに送るためにstateに取っておく
    const [city ,setCity] =useState("");

    // axiosを使ってAPIに都市名を送る
    const getWeather = (e) => {
        e.preventDefault();
        axios.get("https://api.weatherapi.com/v1/current.json?key=0be11468eae249b0b82234208221507&q=London&aqi=no").then(res => console.log(res))

    }
    return (
        <form>
            <input type="text" name="city" placeholder="都市名" onChange={ e => setCity(e.target.value) } />
            <button type="submit" onClick={ getWeather } >Get Weather</button>
        </form>
    );    
};

export default Form;