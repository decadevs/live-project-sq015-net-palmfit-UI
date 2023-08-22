 import React, { useState } from 'react';


const SearchFood = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add code to handle search submission
  };

  return (
    <div className="search-container">
      <p>Let’s find some food for your meal</p>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter food or category"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
        <img className='search' src="/search.svg" alt="Search" /> 
        </button>
      </form>
    </div>
  );
};

export default SearchFood;
