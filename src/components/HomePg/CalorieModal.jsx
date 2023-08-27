import React, { useState } from "react";
import { Button, Modal, Dropdown } from "react-bootstrap";

export default function CalorieModal(props) {
  const [foodName, setFoodName] = useState("");
  const [unit, setUnit] = useState("Cup");
  const [amount, setAmount] = useState("");
  const [calorie, setCalorie] = useState(0.0);

  const handleFoodNameChange = (event) => {
    setFoodName(event.target.value);
  };

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCalculateCalorie = async () => {
    try {
      const unitMappings = {
        Tbs: 0,
        Ounce: 1,
        Cup: 2,
        Pound: 3
      };

      const response = await fetch(
        `https://localhost:7069/api/Food/calculate-calorie-by-name?foodName=${foodName}&unit=${unitMappings[unit]}&amount=${amount}`
      );
      const data = await response.json();
      if (data.succeeded) {
        const parsedCalorie = parseFloat(data.data);
        setCalorie(parsedCalorie);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Modal {...props} size="sm" centered>
      <Modal.Body style={{ padding: 0, backgroundColor: "#1A8D8D" }}>
        <p className="text-white fs-5 ps-4 pt-3">Kcal</p>
        <p className="text-white fs-4 ps-4">{calorie}</p>
        <form
          className="bg-white mt-5"
          style={{ width: "100%", height: "45vh", borderRadius: "5% 5% 0 0" }}
        >
          <div className="form-group mb-3">
            <label htmlFor="food" className="ps-2 m-2">
              Food
            </label>
            <input
              type="text"
              className="form-control mx-auto"
              id="foodId"
              aria-describedby="food"
              style={{ width: "90%" }}
              value={foodName}
              onChange={handleFoodNameChange}
            />
          </div>

          <div className="form-group mt-3 d-flex justify-content-between">
            <div>
              <label htmlFor="foodQuantity" className="ps-2 m-2">
                Food quantity
              </label>
              <input
                type="number"
                className="form-control mx-auto"
                id="foodQId"
                placeholder="Enter a number"
                style={{ width: "90%" }}
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="align-self-center mt-4 pt-3 pe-3">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: "#F4F4F4", color: "black" }}
                >
                  {unit}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleUnitChange("Tbs")}>
                    TableSpoon
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleUnitChange("Ounce")}>
                    Ounce
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleUnitChange("Cup")}>
                    Cup
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleUnitChange("Pound")}>
                    Pound
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <Button
            className="mt-4"
            style={{
              marginLeft: "12%",
              width: "70%",
              backgroundColor: "#1A8D8D",
              color: "white",
              border: "none"
            }}
            onClick={handleCalculateCalorie}
          >
            Calculate Calorie
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
