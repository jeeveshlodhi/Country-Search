import { useState } from "react";
import "./App.css";

function App() {
  const [countryData, setCountryData] = useState([]);

  const Card = (props) => {
    return (
      <div className="card">
        <div className="imgWrapper">
          <img src={props.img} alt="" />
        </div>
        <div>{props.name}</div>
      </div>
    );
  };

  const handleChange = async (event) => {
    var url = "https://restcountries.com/v3.1/name/" + event.target.value;
    // console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length > 20) data = data.slice(0, 20);
        setCountryData(data);
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Country ..."
        className="searchBar"
        onChange={handleChange}
      />
      <div className="cardWrapper">
        {countryData.map((d, i) => {
          return <Card key={i} 
          name={d.name.common} 
          img={d.flags.png} />;
        })}
      </div>
    </div>
  );
}

export default App;
