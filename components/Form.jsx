// Form.jsx

import { useState } from 'react';

const Form = () => {

    // FormのデータをAPIに送るためにstateに取っておく
    const [city ,setCity] =useState("");
    return (
        <form>
            <input type="text" name="city" placeholder="都市名" onChange={ e => setCity(e.target.value) } />
            <button type="submit">Get Weather</button>
        </form>
    );    
};

export default Form;