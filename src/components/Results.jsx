// Results.jsx

const Results = (props) => {
    const {country, cityName, temperature, conditionText, icon} = props.results;

    return (
        <div>
            {country && <div>{country}</div>}
            {cityName && <div>{cityName}</div>}
            {temperature && <div>{temperature}<span>℃</span></div>}
            {conditionText && 
                <div>
                    <img src={icon} alt="icon" />
                    <span>{conditionText}</span>
                </div>
            }
        </div>

    );
};


export default Results;