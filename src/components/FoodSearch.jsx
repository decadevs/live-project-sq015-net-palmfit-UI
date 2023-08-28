import React, { useState, useEffect } from "react";
import FoodTile from "./FoodTile";
import styles from "../styles/Food-Search.module.css";

import img2 from "../../public/istockphoto1270930647170667aremovebgpreview@2x.png"




const FoodSearch = () => {
  const foodInfoList = [
    {
      imageSrc: img2,
      foodName: "Rice, pasta and noodles",
      foodDescription: "White rice, jollof rice, fried rice, basmati rice, spaghetti, macaroni, linguine, noodles, etc.",
    },
    {
        imageSrc: img2,
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: img2,
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: img2,
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: img2,
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: img2,
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: img2,
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
      {
        imageSrc: img2,
        foodName: "Bread and yams",
        foodDescription: "White bread, wheat bread, yam, potatoes, cocoyams, etc.",
      },
    // Add more food items as needed
  ];

  return (
    <>
    <div className={styles.food-search}>
        <h1>Let's find some food for your meal</h1>
        <div className={styles.search-container}>
            <input className={styles.search-box} type="text" required placeholder="Enter food or category" />
            <img className={styles.search-icon} alt="search-icon" src="/search.svg" />
        </div>
      <p className={styles.browse-text}>Browse common foods</p>
      <div className={styles.food-container} >
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

