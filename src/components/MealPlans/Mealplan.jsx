import React from 'react';
import "../../styles/MealPlan.css";
import MealCard from './MealCard';
import { Link } from 'react-router-dom';


const MealPlan = ({mealId}) => {
    // const mealImageUrl = ["food.png", "food.png", "food.png", "food.png", "food.png"];
    // const mealPlan = ["Breakfast", "Dinner", "Lunch", "Breakfast", "dinner"];
    // const mealText = [
    //     "Take your breakfast early.",
    //     "Take your dinner early.",
    //     "Take your lunch early.",
    //     "Take your breakfast early.", "take your dinner late"
    // ];


    // const cards = mealPlan.map((plan, index) => (
    //     <div  className="meal-card" key={index}>
    //         <MealCard imageUrl={mealImageUrl[index]} cardLabel={plan} cardText={mealText[index]} mealId={'please do not forget to pass the meal id along'} />
    //     </div>
    // ));

    return (
        <>
        <div className="container">
            <div className="row">
                <div class="card" style={{width: '16rem'}}>
                    <img src="Naija Epic.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                        <h5 class="card-title">Naija Epic Dish </h5>
                        <Link to={`/weekly-plan/${mealId}`} style={{backgroundColor: 'teal', color: 'white', textDecoration: 'none', padding: '5px', borderRadius: '5px'}}>Continue</Link>
                        </div>
                </div>
                <div class="card" style={{width: '16rem'}}>
                    <img src="Naija Vegan.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                        <h5 class="card-title">Naija Vegan Dish </h5>
                        <Link to={`/weekly-plan/${mealId}`} style={{backgroundColor: 'teal', color: 'white', textDecoration: 'none', padding: '5px', borderRadius: '5px'}}>Continue</Link>
                        </div>
                </div>
                <div class="card" style={{width: '16rem'}}>
                    <img src="Continental.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                        <h5 class="card-title">Continental Dish </h5>
                        <Link to={`/weekly-plan/${mealId}`} style={{backgroundColor: 'teal', color: 'white', textDecoration: 'none', padding: '5px', borderRadius: '5px'}}>Continue</Link>
                        </div>
                </div>
                <div class="card" style={{width: '16rem'}}>
                    <img src="High Protein.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                        <h5 class="card-title">High Protein Dish </h5>
                        <Link to={`/weekly-plan/${mealId}`} style={{backgroundColor: 'teal', color: 'white', textDecoration: 'none', padding: '5px', borderRadius: '5px'}}>Continue</Link>
                        </div>
                </div>
                <div class="card" style={{width: '16rem'}}>
                    <img src="Keto.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                        <h5 class="card-title">Keto Dish </h5>
                        <Link to={`/weekly-plan/${mealId}`} style={{backgroundColor: 'teal', color: 'white', textDecoration: 'none', padding: '5px', borderRadius: '5px'}}>Continue</Link>
                        </div>
                </div>
                <div class="card" style={{width: '16rem'}}>
                    <img src="Sapa dish.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                        <h5 class="card-title">Sapa Dish </h5>
                        <Link to={`/weekly-plan/${mealId}`} style={{backgroundColor: 'teal', color: 'white', textDecoration: 'none', padding: '5px', borderRadius: '5px'}}>Continue</Link>
                        </div>
                </div>
                
                
        </div>
        </div>
       
          {/* <h1 className="mealname"> Meal plans</h1>
            <div className='meal-card-group'>
                {cards}
            </div> */}
        </>
    );
};

export default MealPlan;
