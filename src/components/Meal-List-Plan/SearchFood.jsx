import React from "react";

const FoodSingleOne = () => {
  return (
    <section>
      <div className = 'h4'> </div>
      <p className="para">Let’s find some food for your meal</p>
        <button type="submit" className="search-button1">
        <input type="text" className="search-input1" placeholder="Efo riro" />
        {/* <img className="search-icon" alt="search" src="/search.svg" /> */}
        </button>
      <div className = 'box'>
        <p className='box-p'>Plain White Rice</p>
        <h1 className="box-h1">0.87 Calories</h1>
        <input className='box-input' type='text' placeholder="Food quantity"></input>
        <select className="box-select">
            <option value='cup'>cup</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
        </select>
        <div className='small-box-div'>
            <div className='small-box'>
                <p>carbs</p>
                <h2>0.085g</h2>
            </div>
            <div className='small-box'>
                <p>fat</p>
                <h2>0.02g</h2>
            </div>
            <div className='small-box'>
                <p>protien</p>
                <h2>0.015g</h2>
            </div>
        </div>
      </div>
      <div className="button-div">
        <a href = "#" className="button">Add to meal</a>
      </div>
    </section>
  );
};
export default FoodSingleOne;





// import React, { useState } from 'react';
// //import './SearchFood.css';
// //import search from '../../../src/Image/Vector.png';

// const SearchFood = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const baseNumber = 0.87; // Change this to your desired base number
//   const baseNumbers = 0.085;
//   const baseNumberss = 0.002;
//   const baseNumbersss = 0.015;

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Add code to handle search submission
//   };

//   const handleQuantityChange = (event) => {
//     const newQuantity = event.target.value;
//     setQuantity(newQuantity);
//   };

//   const calculatedNumber = quantity ? parseInt(quantity) * baseNumber : '';
//   const calculatedNumber1 = quantity ? parseInt(quantity) * baseNumbers : '';
//   const calculatedNumber2 = quantity ? parseInt(quantity) * baseNumberss : '';
//   const calculatedNumber3 = quantity ? parseInt(quantity) * baseNumbersss : '';

//   return (
//     <div className="search-container">
//       <p>Let’s find some food for your</p>      
//       <form onSubmit={handleSearchSubmit} className="search-form">
//   <div class="mb-3">
//     <input 
//     type="text"
//     placeholder="Enter food or category"
//     value={searchTerm}
//     onChange={handleSearchChange}
//     className="search-input"
//      id="exampleInputEmail1" 
//      aria-describedby="emailHelp" />
//   </div>
//   <button type="submit" className="search-button">
//       <img src="/search.svg" alt="Search" /> 
//     </button>
//   </form>

//   <div className="frame">
//       <div className="group">
//         <div className="text-wrapper">Carbs</div>
//         {/* <div className="div">{calculatedNumber1}g</div> */}
//         <div className="div">0.085g</div>
//       </div>
//       <div className="group-2">
//         <div className="text-wrapper">Fat</div>
//         {/* <div className="div">{calculatedNumber2}g</div> */}
//         <div className="div">0.02g</div>
//       </div>
//       <div className="group-3">
//         <div className="text-wrapper">Protein</div>
//         {/* <div className="div">{calculatedNumber3}g</div> */}
//         <div className="div">0.015g</div>
//       </div>
//       {/* <div className="text-wrapper-2">{searchTerm}</div> */}
//       <div className="text-wrapper-2">Efo riro</div>
//       {/* <div className="text-wrapper-3">{calculatedNumber} Calories</div> */}
//       <div className="text-wrapper-3">87 Calories</div>
//       <div className="div-2">

//         <input 
//         className="text-wrapper-4" 
//         type='text' 
//         placeholder='Food quantity'
//         value={quantity}
//         onChange={handleQuantityChange} 
//         />

//       </div>
//       <div className="group-4">
//         <select className="text-wrapper-5">
//           <option>Cup</option>
//           <option>gram</option>
//           <option>TableSpoon</option>
//         </select>
//       </div>
//     </div>
//     <div className="button">
//           <button className="button-click">Add to meal</button>
//         </div>
//     </div>

//   );
// };

// export default SearchFood;
