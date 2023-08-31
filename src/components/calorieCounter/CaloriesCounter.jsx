import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/CalCalories.module.css";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function CaloriesCounter() {
  //   const [selectedDay, setSelectedDay] = useState("1"); // Default selected day is Monday

  //   const dayMealOptions = {
  //     1: ["Rice", "Eggs", "Toast"],
  //     2: ["Pasta", "Salad", "Fruit"],
  //     3: ["Chicken", "Rice", "Veggies"]
  //     // ... and so on for each day
  //   };

  //   const [selectedDayMeals, setSelectedDayMeals] = useState([]);

  //   useEffect(() => {
  //     const mealsForSelectedDay = dayMealOptions[selectedDay] || [];
  //     setSelectedDayMeals(mealsForSelectedDay);
  //   }, [selectedDay]);

  function getMealTitle(index) {
    switch (index) {
      case 0:
        return "Breakfast";
      case 1:
        return "Lunch";
      case 2:
        return "Dinner";
      default:
        return "";
    }
  }

  const [selectedDay, setSelectedDay] = useState("1");
  const [selectedDayMeals, setSelectedDayMeals] = useState([]);
  const [mealOptions, setMealOptions] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(
        "https://localhost:7069/api/MealPlanController/get-selected-meal-plan?appUserId=03aff654-84a2-464e-8c93-8b1ab274e992"
      )
      .then((response) => {
        // Extract and update the meal options and selected day meals
        console.log(response.data);
        const mealData = response.data.data.$values;
        const dayMeals = mealData.filter(
          (meal) => meal.dayOfWeek === selectedDay
        );
        const mealOptions = mealData.map((meal) => meal.name);
        console.log(mealData, dayMeals, mealOptions);

        setSelectedDayMeals(dayMeals);
        setMealOptions(mealOptions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedDay]);

  // meal
  const [mealName, setMealName] = useState("Coconut Jollof Rice"); // State to store selected meal name
  const [unit, setUnit] = useState("Ounce"); // Default unit
  const [mealQuantity, setMealQuantity] = useState("1"); // State to store meal quantity
  const [calorieInfo, setCalorieInfo] = useState({
    calorie: 0,
    fats: 0,
    carbs: 0,
    proteins: 0
  }); // State to store calorie information

  const unitMappings = {
    Tbs: 0,
    Ounce: 1,
    Cup: 2,
    Piece: 3
  };
  // Function to fetch calorie information based on selected meal
  const fetchCalorieInfo = () => {
    axios
      .get(
        `https://localhost:7069/api/Food/calculate-calorie-by-name?foodName=${mealName}&unit=${unitMappings[unit]}&amount=${mealQuantity}`
      )
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        setCalorieInfo({
          calorie: data.calorie,
          fats: data.fats,
          carbs: data.carbs,
          proteins: data.proteins
        });
      })
      .catch((error) => {
        console.error("Error fetching calorie data:", error);
      });
  };

  useEffect(() => {
    fetchCalorieInfo();
  }, [mealName, unit, mealQuantity]);

  return (
    <div>
      <div className={`${styles.holder} row `}>
        <div className={`${styles.left} col-md-7 mt-3 `}>
          <div className={`${styles.weekHold} col-md-3`}>
            <Form.Select
              aria-label="Default select example"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="7">Sunday</option>
            </Form.Select>
          </div>

          <div className={`${styles.food_controller} gap-3`}>
            <div className={`${styles.dayMeal} col-md-4 col-sm-6 mt-3 mr-3`}>
              <Table striped bordered hover variant="light">
                <tbody>
                  {selectedDayMeals.map((meal, index) => (
                    <tr key={index} className={`${styles.foodCheck}`}>
                      <td colSpan={2}>{getMealTitle(index)}</td>
                      <td className="d-flex gap-5">
                        <h5>{meal}</h5>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className={`${styles.dataholder}`}>
              <div className={`${styles.DetailsPerFood} col-md-12`}>
                <div className="weekHold col-md-5 mt-3">
                  <Form.Select
                    aria-label="Default select example"
                    value={mealName}
                    onChange={(e) => setMealName(e.target.value)}
                  >
                    {selectedDayMeals.map((meal, index) => (
                      <option key={index} value={meal.name}>
                        {meal.name}
                      </option>
                    ))}
                  </Form.Select>
                </div>
                <div className={`${styles.hold} d-flex gap-3 mt-3`}>
                  <h5>{calorieInfo.calorie}</h5> <span>Calories</span>
                </div>

                <div className={`${styles.custominput} mt-3 d-flex gap-2`}>
                  <input
                    type="text"
                    id="customInput"
                    placeholder="food quantity"
                    value={mealQuantity}
                    onChange={(e) => setMealQuantity(e.target.value)}
                  />

                  <div className={`${styles.Hold} col-md-4"`}>
                    <Form.Select
                      aria-label="Default select example"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                    >
                      <option value="Tbs">Tablespoon</option>
                      <option value="Ounce">Ounce</option>
                      <option value="Cup">Cup</option>
                      <option value="Piece">Piece</option>
                    </Form.Select>
                  </div>
                </div>

                <div
                  className={`${styles.types} d-flex gap-5 mt-5 justify-content-around`}
                >
                  <div className={`${styles.left}`}>
                    <h5>Carbs</h5>{" "}
                    <span>
                      {calorieInfo.carbs} <span>g</span>
                    </span>
                  </div>
                  <div className={`${styles.center}`}>
                    <h5>Fat</h5>{" "}
                    <span>
                      {calorieInfo.fats}
                      <span>g</span>
                    </span>
                  </div>
                  <div className={`${styles.right}`}>
                    <h5>Protein</h5>{" "}
                    <span>
                      {calorieInfo.proteins}
                      <span>g</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={`${styles.summary} col-md-12 mt-3`}>
                <Table striped bordered hover variant="light">
                  <tbody>
                    <tr>
                      <td colSpan={2}>Total</td>
                      <td>
                        2102 <span>g</span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>Youd daily goal</td>
                      <td>
                        7120 <span>g</span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>Remaining</td>
                      <td>
                        5023 <span>g</span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className={`${styles.rightELe} container col-md-4`}>
          <h3 className="mt-3 mb-4">Calorie Estimate</h3>
          <div className={`${styles.circle} col-xs-4`}>
            <div className={`${styles.content}`}>
              <span>Total</span>
              <div className={`${styles.data}`}>1900</div>
              <span>kcal</span>
            </div>
          </div>

          <div className={`${styles.seeforU} m-4 `}>
            <span>
              {" "}
              See how your daily calorie needs change if you alter your activity
              level
            </span>
          </div>

          <div className={`${styles.sideHold} container col-md-10 col-sm-10`}>
            <button className={`${styles.element} col-md-4 col-sm-4`}>
              <div className={`${styles.inner}`}>
                <div>
                  <h3>1900</h3>
                  <span>kcal</span>
                </div>
                <small>Incactive</small>
              </div>
            </button>
            <button className={`${styles.element} col-md-4 col-sm-4`}>
              <div className={`${styles.inner}`}>
                <div>
                  <h3>2100</h3>
                  <span>kcal</span>
                </div>
                <small>Somewhat Active</small>
              </div>
            </button>
            <button className={`${styles.element} col-md-4 col-sm-4`}>
              <div className={`${styles.inner}`}>
                <div>
                  <h3>2600</h3>
                  <span>kcal</span>
                </div>
                <small>Active</small>
              </div>
            </button>
          </div>

          <div className={`${styles.buttHold} m-4 col-md-10 col-sm-10`}>
            <h2>Our Recommendation</h2>
            <span className="col-md-12">
              We recommend that you increase your daily calorie intake from
              1.900 to 2.100, you should add 1 pound (0.45 kg) in 1 week, as
              3,500 calories (500 calories saved over 7 days) is the approximate
              number of calories in 1 pound of body fat
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaloriesCounter;
