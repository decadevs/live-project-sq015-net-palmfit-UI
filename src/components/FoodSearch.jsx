import React, { useState, useEffect } from "react";
import FoodTile from "./FoodTile";
import "../styles/Food-Search.css";

const FoodSearch = () => {
  const foodInfoList = [
    {
      imageSrc: "/istockphoto183328028170667aremovebgpreview@2x.png",
      foodName: "Rice, pasta and noodles",
      foodDescription: "White rice, jollof rice, fried rice, basmati rice, spaghetti, macaroni, linguine, noodles, etc.",
    },
    {
        imageSrc: "/istockphoto479684838170667aremovebgpreview@2x.png",
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: "/istockphoto479684838170667aremovebgpreview@2x.png",
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: "/istockphoto479684838170667aremovebgpreview@2x.png",
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: "/istockphoto479684838170667aremovebgpreview@2x.png",
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: "/istockphoto479684838170667aremovebgpreview@2x.png",
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: "/istockphoto479684838170667aremovebgpreview@2x.png",
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: "/istockphoto479684838170667aremovebgpreview@2x.png",
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
    // Add more food items as needed
  ];

  return (
    <>
    <div className="food-search">
        <h1>Let's find some food for your meal</h1>
        <div className="search-container">
            <input className="search-box" type="text" required placeholder="Enter food or category" />
            {/* <img className="search-icon" alt="search-icon" src="/search.svg" /> */}
        </div>
      <p className="browse-text">Browse common foods</p>
      <div className="food-container" >
        {
          foodInfoList.map((el, ind) =>(
            
            <FoodTile imgSrc={el.imageSrc} foodName={el.foodName} foodDescription={el.foodDescription} />
          ))
        }
      </div>
    </div>
    </>
  );
};

export default FoodSearch;


// import React from "react";
// import FoodTile from "./FoodTile";
// import "./Food-Search.css";


// const FoodSearch = () => {
// return (
//     <>
//     <div className="food-container">
//         <FoodTile/>
//         <FoodTile/>
//     </div>
    
//     </>
// )
// }

// export default FoodSearch;