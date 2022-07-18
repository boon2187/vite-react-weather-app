// Results.jsx

const Results = (props) => {
    return (
        <div>
            <h1>気象データ {props.results.country}</h1>
            <p>{props.results.cityName}</p>
            <p>{props.results.temperature}</p>
        </div>

    );
};


export default Results;