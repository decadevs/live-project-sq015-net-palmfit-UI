import React, { useState } from 'react';

const FoodTable = ({ foods, addMeal }) => {
  const [foodData, setFoodData] = useState(foods);

  return (
    <>
    <table className="food-table">
      <thead>
        <tr>
          <th>FOOD</th>
          <th>AMOUNT</th>
          <th>CALORIES</th>
        </tr>
      </thead>
      <tbody>
        {foodData.map((food, index) => (
          <tr key={index}>
            <td>{food.name}</td>
            <td>
              <input readOnly  type="number" value={food.amount} />
               <select  value={food.measurement}>
                <option value="cup">cup</option>   
              </select>
            </td>
            <td>{parseFloat(food.calories, 0)}</td>
          </tr>
        ))}
      </tbody>
    </table>
        <div className="total-row">
          <p>Total</p>
          <p>{foodData.reduce((total, food) => total + parseFloat(food.calories), 0)}</p>
        </div>
    </>
  );
};

export default FoodTable;
