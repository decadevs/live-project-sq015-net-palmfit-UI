import React from 'react';

const MealCard = ({imageUrl, cardLabel, cardText}) => {
    return (
        <>
                <div className="card">
        <img src={imageUrl} alt='card' className="card-image" />
        <div className="card-content">
        <h3 className="card-label">{cardLabel}</h3>
        <p className="card-text">{cardText}
        </p>
        </div>
     </div>
        </>

      );
};

export default MealCard
