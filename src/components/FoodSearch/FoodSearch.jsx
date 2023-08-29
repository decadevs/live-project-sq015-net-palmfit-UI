import React, { useState } from "react";
import search from '../images/search.svg';
import FoodResult from './FoodResult.jsx';


const FoodSearch = () => {
  const [input, setInput] = useState("");

  //const Foods = {};

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className="food-search-results">
      <div className="div">
        <p className="p">Let’s find some food for your meal</p>

        <div className="frame-2">
          <input
            className="text-wrapper-1"
            type="text"
            placeholder="Rice"
            value={input}
            onChange={handleChange}
          />
          <img className="search" alt="Search" src={search} onChange={handleChange}/>
        </div>
        <FoodResult />
      </div>
    </div>

  );
};

export default FoodSearch;
