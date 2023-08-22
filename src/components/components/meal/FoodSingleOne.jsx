import React from "react";

const FoodSingleOne = () => {
  return (
    <section>
      <div className = 'h4'> </div> 
      <div className="search-container">
        <h4>Lets find some food for your meal</h4>
        <input type="text" className="search-input" placeholder="Rice" />
        <span className="search-icon">&#128269;</span>
      </div>
      <div className = 'box'>
        <p className='box-p'>Plain White Rice</p>
        <h1 className="box-h1">242 Calories</h1>
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
                <h2>36.5g</h2>
            </div>
            <div className='small-box'>
                <p>fat</p>
                <h2>0.4g</h2>
            </div>
            <div className='small-box'>
                <p>protien</p>
                <h2>4.3g</h2>
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
