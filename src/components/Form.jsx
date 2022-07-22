// Form.jsx

// 都市名LondonでもらったURLを、テスト用にとりあえず保存しておく
// "https://api.weatherapi.com/v1/current.json?key=0be11468eae249b0b82234208221507&q=London&aqi=no"

const Form = ({city, setCity, getWeather}) => {


    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="都市名"  onChange={ e => setCity(e.target.value) } value={city} />
            <button type="submit" >Get Weather</button>
        </form>
    );    
};

export default Form;