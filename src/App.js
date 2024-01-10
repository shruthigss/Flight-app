import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Viewpage from './components/Viewpage';

const App = () => {
  const [flights, setFlights] = useState([]);
  const [airlineFilter, setAirlineFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/4829d4ab0e96bfab50e7"
        );
        const resultArray = response.data?.data?.result;
        if (resultArray) {
          const flightDataArray = resultArray.map((item, index) => ({
            id: index,
            displayData: item?.displayData,
            fare: item?.fare,
          }));

          setFlights(flightDataArray || []);
        } else {
          console.error("Result array not found in the response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const sortFlights = (order) => {
    const sortedFlights = [...flights];

    sortedFlights.sort((a, b) => {
      const fareA = parseFloat(a.fare);
      const fareB = parseFloat(b.fare);

      if (order === "lowToHigh") {
        return fareA - fareB;
      } else {
        return fareB - fareA;
      }
    });

    setFlights(sortedFlights);
  };

  const filterFlights = (airlineFilter) => {
    setAirlineFilter(airlineFilter);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar onSortChange={sortFlights} onFilterChange={filterFlights} />
              <Home flights={flights} airlineFilter={airlineFilter} />
            </>
          }
        />
        <Route path='Viewpage/:flightId' element={<Viewpage />} />
      </Routes>
    </Router>
  );
};

export default App;