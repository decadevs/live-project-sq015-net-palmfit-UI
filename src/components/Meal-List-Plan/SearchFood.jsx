import React, { useState } from 'react';
//import './SearchFood.css';
//import search from '../../../src/Image/Vector.png';

const SearchFood = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState('');
  const baseNumber = 0.87; // Change this to your desired base number
  const baseNumbers = 0.085;
  const baseNumberss = 0.002;
  const baseNumbersss = 0.015;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add code to handle search submission
  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  const calculatedNumber = quantity ? parseInt(quantity) * baseNumber : '';
  const calculatedNumber1 = quantity ? parseInt(quantity) * baseNumbers : '';
  const calculatedNumber2 = quantity ? parseInt(quantity) * baseNumberss : '';
  const calculatedNumber3 = quantity ? parseInt(quantity) * baseNumbersss : '';

  return (
    <div className="search-container">
      <p>Let’s find some food for your</p>      
      <form onSubmit={handleSearchSubmit} className="search-form">
  <div class="mb-3">
    <input 
    type="text"
    placeholder="Enter food or category"
    value={searchTerm}
    onChange={handleSearchChange}
    className="search-input"
     id="exampleInputEmail1" 
     aria-describedby="emailHelp" />
  </div>
  <button type="submit" className="search-button">
      <img src="/search.svg" alt="Search" /> 
    </button>
  </form>

  <div className="frame">
      <div className="group">
        <div className="text-wrapper">Carbs</div>
        {/* <div className="div">{calculatedNumber1}g</div> */}
        <div className="div">0.085g</div>
      </div>
      <div className="group-2">
        <div className="text-wrapper">Fat</div>
        {/* <div className="div">{calculatedNumber2}g</div> */}
        <div className="div">0.02g</div>
      </div>
      <div className="group-3">
        <div className="text-wrapper">Protein</div>
        {/* <div className="div">{calculatedNumber3}g</div> */}
        <div className="div">0.015g</div>
      </div>
      {/* <div className="text-wrapper-2">{searchTerm}</div> */}
      <div className="text-wrapper-2">Efo riro</div>
      {/* <div className="text-wrapper-3">{calculatedNumber} Calories</div> */}
      <div className="text-wrapper-3">87 Calories</div>
      <div className="div-2">

        <input 
        className="text-wrapper-4" 
        type='text' 
        placeholder='Food quantity'
        value={quantity}
        onChange={handleQuantityChange} 
        />

      </div>
      <div className="group-4">
        <select className="text-wrapper-5">
          <option>Cup</option>
          <option>gram</option>
          <option>TableSpoon</option>
        </select>
      </div>
    </div>
    <div className="button">
          <button className="button-click">Add to meal</button>
        </div>
    </div>

  );
};

export default SearchFood;
