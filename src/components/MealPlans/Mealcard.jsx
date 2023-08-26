import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({imageUrl, cardLabel, cardText, mealId}) => {
    return (
        <>
          <Link to={`/daily-plan/${mealId}`} className="card">
              <img src={imageUrl} alt='card' className="card-image" />
              <div className="card-content">
                <h3 className="card-label">{cardLabel}</h3>
                <p className="card-text">{cardText}
                </p>
              </div>
          </Link>
        </>

      );
};

export default MealCard
