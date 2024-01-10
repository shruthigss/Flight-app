import React from 'react';
import './Navbar.css';

const Navbar = ({ onSortChange, onFilterChange }) => {

  const handleSortChange = (event) => {
    const newOrder = event.target.value;
    onSortChange(newOrder);
  };

  const handleFilterChange = (event) => {
    const airlineFilter = event.target.value;
    onFilterChange(airlineFilter);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://banner2.cleanpng.com/20180406/tie/kisspng-airplane-aircraft-maintenance-flight-transport-aeroplane-5ac7b14f05e3e0.1254718215230364950241.jpg"
          alt="Logo"
        />
        <h3 className="nav-heading">Jetset Go.Com</h3>
      </div>

      <input className="nav-inputs" placeholder="Search flight" onChange={handleFilterChange} />

      <select onChange={handleSortChange} className="nav-inputs">
        <option value="lowToHigh">Sort by Price (Low to High)</option>
        <option value="highToLow">Sort by Price (High to Low)</option>
      </select>

      <div className="nav-options">About</div>
      <div className="nav-options">Contact</div>
    </nav>
  );
};

export default Navbar;

