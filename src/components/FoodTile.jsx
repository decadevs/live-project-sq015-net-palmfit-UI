import React from "react";

const FoodTile = ({ imgSrc, foodName, foodDescription }) => {
  return (
    <>
      {/* {foodInfoList.map((foodInfo, index) => ( */}
        <div className="tile-frame">
          <img
            className="img-frame"
            alt="food-img"
            src={imgSrc}
          />
          <div className="food-info">
            <p className="food-name">{foodName}</p>
            <p className="food-description">{foodDescription}</p>
          </div>
        </div>
      {/* ))} */}
    </>
  );
};

export default FoodTile;





