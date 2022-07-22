import { useState } from 'react';
import axios from 'axios';

import Title from './components/Title.jsx'
import Form from './components/Form.jsx'
import Results from './components/Results'
import Loading from './components/Loading'

import './App.css'


function App() {
  // データ取得中のstateを作っておく
  const [loading, setLoading] = useState(false);

  // Formから持ってきた元「FormのデータをAPIに送るためにstateに取っておく」部分
  const [city ,setCity] =useState("");

  // wetherapi.comからの結果を受け取る
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });

  // Formから思ってきた元「axiosを使ってAPIに都市名を送る」部分
  const getWeather = (e) => {
      e.preventDefault();
      // Loadingを開始＝stateがtrueに
      setLoading(true);
      axios.get(`https://api.weatherapi.com/v1/current.json?key=0be11468eae249b0b82234208221507&q=${city}&aqi=no`).then(res => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon
        });
        setCity("");
        // 終わったからLoadingのStateをfalseに戻す
        setLoading(false);
      }).catch(err => alert("エラーが発生しました。ページをリロードして、もういぢとトライしてください。"));
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} city={city} />
        {loading ? <Loading /> : <Results results={results}/> }    
      </div>
    </div>
  )
}

export default App
