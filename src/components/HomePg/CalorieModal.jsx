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
        Cup: 0,
        Ounce: 1
        // Add more mappings as needed
      };

      const response = await fetch(
        `https://localhost:7069/api/Food/calculate-calorie-by-name?foodName=${foodName}&unit=${unitMappings[unit]}&amount=${amount}`
      );
      const data = await response.json();
      if (data.success) {
        setCalorie(data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Modal {...props} size="sm" centered>
      <Modal.Body style={{ padding: 0, backgroundColor: "#1A8D8D" }}>
        <p className="text-white fs-5 ps-4 pt-3">Kcal</p>
        <p className="text-white fs-4 ps-5">{calorie}</p>
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
                  <Dropdown.Item onClick={() => handleUnitChange("Cup")}>
                    Cup
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleUnitChange("Ounce")}>
                    Ounce
                  </Dropdown.Item>
                  {/* Add other units here */}
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

// import React, { useState } from "react";
// import { Button, Modal, Dropdown } from "react-bootstrap";

// export default function CalorieModal(props) {
//   const [foodName, setFoodName] = useState("");
//   const [unit, setUnit] = useState("Cup");
//   const [amount, setAmount] = useState("");
//   const [calorie, setCalorie] = useState(0.0);

//   const handleFoodNameChange = (event) => {
//     setFoodName(event.target.value);
//   };

//   const handleUnitChange = (selectedUnit) => {
//     setUnit(selectedUnit);
//   };

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };

//   const handleCalculateCalorie = async () => {
//     try {
//       const response = await fetch(
//         `https://localhost:7069/api/Food/calculate-calorie-by-name?foodName=${foodName}&unit=${unit}&amount=${amount}`
//       );
//       const data = await response.json();
//       if (data.success) {
//         setCalorie(data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <Modal {...props} size="sm" centered>
//       <Modal.Body style={{ padding: 0, backgroundColor: "#1A8D8D" }}>
//         <p className="text-white fs-5 ps-4 pt-3">Kcal</p>
//         <p className="text-white fs-4 ps-5">{calorie}</p>
//         <form
//           className="bg-white mt-5"
//           style={{ width: "100%", height: "45vh", borderRadius: "5% 5% 0 0" }}
//         >
//           <div className="form-group mb-3">
//             <label htmlFor="food" className="ps-2 m-2">
//               Food
//             </label>
//             <input
//               type="text"
//               className="form-control mx-auto"
//               id="foodId"
//               aria-describedby="food"
//               style={{ width: "90%" }}
//               value={foodName}
//               onChange={handleFoodNameChange}
//             />
//           </div>

//           <div className="form-group mt-3 d-flex justify-content-between">
//             <div>
//               <label htmlFor="foodQuantity" className="ps-2 m-2">
//                 Food quantity
//               </label>
//               <input
//                 type="number"
//                 className="form-control mx-auto"
//                 id="foodQId"
//                 placeholder="Enter a number"
//                 style={{ width: "90%" }}
//                 value={amount}
//                 onChange={handleAmountChange}
//               />
//             </div>
//             <div className="align-self-center mt-4 pt-3 pe-3">
//               <Dropdown>
//                 <Dropdown.Toggle
//                   style={{ backgroundColor: "#F4F4F4", color: "black" }}
//                 >
//                   {unit}
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item onClick={() => handleUnitChange("Cup")}>
//                     Cup
//                   </Dropdown.Item>
//                   <Dropdown.Item onClick={() => handleUnitChange("Ounce")}>
//                     Ounce
//                   </Dropdown.Item>
//                   {/* Add other units here */}
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div>
//           </div>

//           <Button
//             className="mt-4"
//             style={{
//               marginLeft: "12%",
//               width: "70%",
//               backgroundColor: "#1A8D8D",
//               color: "white",
//               border: "none"
//             }}
//             onClick={handleCalculateCalorie}
//           >
//             Calculate Calorie
//           </Button>
//         </form>
//       </Modal.Body>
//     </Modal>
//   );
// }

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Dropdown from "react-bootstrap/Dropdown";
// import React, { useState } from "react";

// export default function CalorieModal(props) {
//   return (
//     <Modal {...props} size="sm" centered>
//       <Modal.Body style={{ padding: 0, backgroundColor: "#1A8D8D" }}>
//         <p className="text-white fs-5 ps-4 pt-3">Kcal</p>
//         <p className="text-white  fs-4 ps-5">{props.calorie}</p>
//         <form
//           className="bg-white mt-5"
//           style={{ width: "100%", height: "45vh", borderRadius: "5% 5% 0 0" }}
//         >
//           <div className="form-group mb-3">
//             <label for="food" className="ps-2 m-2">
//               Food
//             </label>
//             <input
//               type="name"
//               className="form-control mx-auto"
//               id="foodId"
//               aria-describedby="food"
//               style={{ width: "90%" }}
//             />
//           </div>

//           <div className="form-group mt-3 d-flex justify-content-between">
//             <div>
//               <label for="foodQuanitity" className="ps-2 m-2">
//                 Food quantity
//               </label>
//               <input
//                 type="name"
//                 className="form-control mx-auto"
//                 id="foodQId"
//                 placeholder="Enter a number"
//                 style={{ width: "90%" }}
//               />
//             </div>
//             <div className="align-self-center mt-4 pt-3 pe-3">
//               <Dropdown>
//                 <Dropdown.Toggle
//                   style={{ backgroundColor: "#F4F4F4", color: "black" }}
//                 >
//                   {" "}
//                   Cup{" "}
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item>
//                     <a class="dropdown-item" href="#">
//                       Ounce
//                     </a>
//                   </Dropdown.Item>
//                   <Dropdown.Item>
//                     <a class="dropdown-item" href="#">
//                       Cubit
//                     </a>
//                   </Dropdown.Item>
//                   <Dropdown.Item>
//                     <a class="dropdown-item" href="#">
//                       KJ
//                     </a>
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </div>
//           </div>

//           <a
//             className="btn btn-primary mt-4"
//             href="#"
//             style={{
//               marginLeft: "12%",
//               width: "70%",
//               backgroundColor: "#1A8D8D"
//             }}
//           >
//             Calculate Calorie
//           </a>
//         </form>
//       </Modal.Body>
//       {/* <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer> */}
//     </Modal>
//   );
// }
