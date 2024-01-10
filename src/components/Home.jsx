import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = ({ flights, airlineFilter }) => {
  
  const filteredFlights = flights.filter((flight) => {
    const airlineName =
      flight.displayData.airlines[0].airlineName.toLowerCase();
    return airlineName.includes(airlineFilter.toLowerCase());
  });

  return (
    <div>
      <div className="flight-info-heading">
        <div>Airline</div>
        <div className="heading-option-2">From</div>
        <div className="heading-option-3">To</div>
        <div className="heading-option-1">Fare</div>
      </div>

      {filteredFlights.map((flight) => (
        <div key={flight.id} className="flight-container">
          <div className="flight-info">
            <img
              className="container-img"
              src="https://p.kindpng.com/picc/s/162-1623456_airplane-plane-travel-flight-jet-airliner-transparent-background.png"
              alt="logo"
            />
            <div>{flight.displayData.airlines[0].airlineName}</div>
          </div>

          <div className="flight-info">
            <div>{flight.displayData.source.airport.cityName}</div>
            <div className="flight-citycode">
              {flight.displayData.source.airport.cityCode}
            </div>
          </div>

          <div className="line-between"></div>

          <div className="flight-info">
            <div className="flight-info-1">
              <div>{flight.displayData.destination.airport.cityName}</div>
              <div className="flight-citycode">
                {flight.displayData.destination.airport.cityCode}
              </div>
            </div>
          </div>

          <div className="flight-info">
            <div className="btn-1">
              <div className="flight-fare">{flight.fare}</div>
              <Link to={`/Viewpage/${flight.id}`} state={{ selectedFlight: flight }}>
                <button className="flight-view-btn">VIEW MORE</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
