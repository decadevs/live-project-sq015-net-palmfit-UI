import React from 'react'
import '../../styles/CalCalories.css';

function CaloriesCounter() {
 
    return (
        <div>
            <div className="holder row ml-5">
                <div className="col"></div>
                <div className="left col-md-7 mt-3">
                    <h3 className='mb-5 mt-5'>Calculate your calorie</h3>
                    <div className="mydata col-md-11 d-flex">
                        <div className="first d-flex flex-xs-column">
                            <span className='w-md-75'>Your Age</span>
                            <input class="form-control p-2" type="text" placeholder="" aria-label="Search" />
                        </div>
                        <div className="first d-flex">
                            <span>Height</span>
                            <input class="form-control p-2" type="text" placeholder="cm" aria-label="Search" />
                        </div>
                        <div className="first d-flex">
                            <span>Weight</span>
                            <input class="form-control p-2" type="text" placeholder="kg" aria-label="Search" />
                        </div>
                    </div>

                    <div className="gender mb-5 mt-3">
                        <h4>You're a</h4>
                        <div className=''><button className="leftt">Male</button><button className="right">Female</button></div>
                    </div>

                    <div className="weightControl mb-5">
                        <h4>What is your weight goal</h4>
                        <div className=''><button className='leftt'>Lose</button><button className='center'>Maintain</button><button className='right'>Gain</button></div>
                    </div>

                    <div className="weightStatus mb-5">
                        <h4 className='container'>What is your weight goal</h4>
                        <div className='container'>
                            <div className='row mr-5'>
                                <button className='leftt col-md-4 col-sm-4'><div className="inactive"><h5>Inactive</h5> <span>No exercise</span></div></button>
                                <button className='center col-md-4 col-sm-4'><div className="somewhat"><h5>Somewhat Active</h5> <span>(3x-4x per week)</span></div></button>
                                <button className='right col-md-4 col-sm-4'><div className="aactive"><h5>Active</h5> <span>(5x+ per week)</span></div></button>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className='Submit col-md-6 col-sm-10 mb-4 align-content-center'>Calculate Calorie</button>
                </div>

                <div className="container rightELe col-md-4">
                    <h3 className='mt-5 mb-4'>Calorie Estimate</h3>
                    <div class="circle col-xs-4">
                        <div className="content">
                            <span>Total</span>
                            <div className="data">1900</div>
                            <span>kcal</span>
                        </div>
                    </div>

                    <div className='m-4 seeforU'><span> See how your daily calorie needs change if you alter your activity level</span></div>

                    <div className="container sideHold col-md-10 col-sm-10">
                        <button className='element col-md-4 col-sm-4'>
                            <div className="inner">
                                <div>
                                    <h3>1900</h3>
                                    <span>kcal</span>
                                </div>
                                <small>Incactive</small>
                            </div>
                        </button>
                        <button className='element col-md-4 col-sm-4'>
                            <div className="inner">
                                <div>
                                    <h3>2100</h3>
                                    <span>kcal</span>
                                </div>
                                <small>Somewhat Active</small>
                            </div>
                        </button>
                        <button className='element col-md-4 col-sm-4'>
                            <div className="inner">
                                <div>
                                    <h3>2600</h3>
                                    <span>kcal</span>
                                </div>
                                <small>Active</small>
                            </div>
                        </button>
                    </div>

                    <div className='buttHold m-4 col-md-10 col-sm-10'>
                        <h2>Our Recommendation</h2>
                        <span className='col-md-12'>We recommend that you increase your daily calorie intake from 1.900 to 2.100,
                            you should add 1 pound (0.45 kg) in 1 week, as 3,500 calories (500 calories saved over 7 days)
                            is the approximate number of calories in 1 pound of body fat
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaloriesCounter;