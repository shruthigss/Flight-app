import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Viewpage.css";
import { Link } from "react-router-dom";

function Viewpage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedFlight } = location.state || {};

  console.log(selectedFlight);
  if (!selectedFlight) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <div className="container">
        <div className="info-container">
          <div className="info-item">
            <span>Airline : </span>
            <span>{selectedFlight.displayData.airlines[0].airlineName}</span>
          </div>
          <div className="info-item">
            <span>Flight Number : </span>
            <span>{selectedFlight.displayData.airlines[0].flightNumber}</span>
          </div>
          <div className="info-item">
            <span>Total Duration : </span>
            <span>{selectedFlight.displayData.totalDuration}</span>
          </div>
          <div className="info-item">
            <span>Stop : </span>
            <span>{selectedFlight.displayData.stopInfo}</span>
          </div>
          <div className="info-item">
            <span>Fare : </span>
            <span>{selectedFlight.fare}</span>
          </div>
        </div>
      </div>
      <div className="container-1">
        <div className="info-container">
        <div className="info-item-1">
          <span>From:</span>
          <span>{selectedFlight.displayData.source.airport.cityName}</span>
        </div>
        <div className="info-item-1">
          <span>To:</span>
          <span>{selectedFlight.displayData.destination.airport.cityName}</span>
        </div>
        </div>
      </div>
      <Link to='/'><button className="btn">Back</button></Link>
    </div>
  );
}

export default Viewpage;

{/* <div className="info-item">
<span>Departure Terminal:</span>
<span>  {selectedFlight.displayData.source.airport.terminal}</span>
</div>
<div className="info-item">
<span>Arrival Terminal:</span>
<span> {selectedFlight.displayData.destination.airport.terminal}</span>
</div> */}