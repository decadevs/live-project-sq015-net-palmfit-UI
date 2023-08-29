import React from 'react'
import styles from '../../styles/CalCalories.module.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function CaloriesCounter() {
    return (
        <div>
            <div className={`${styles.holder} row `}>
                <div className={`${styles.left} col-md-7 mt-3 `}>
                    <div className={`${styles.weekHold} col-md-3`}>
                        <Form.Select aria-label="Default select example">
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
                                    <tr className={`${styles.foodCheck}`}>
                                        <td colSpan={2}>Breakfast</td>
                                        <td className='d-flex gap-5'><h5>Rice</h5></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Lunch</td>
                                        <td><h5>Beans</h5> </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Dinner</td>
                                        <td><h5>Moi-Moi</h5></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                        <div className={`${styles.dataholder}`}>
                            <div className={`${styles.DetailsPerFood} col-md-12`}>
                                <div className="weekHold col-md-5 mt-3">
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">Rice</option>
                                        <option value="2">Beans</option>
                                        <option value="3">MoiMoi</option>
                                    </Form.Select>
                                </div>
                                <div className={`${styles.hold} d-flex gap-3 mt-3`}><h5>237</h5> <span>Calories</span></div>

                                <div className={`${styles.custominput} mt-3 d-flex gap-2`}>
                                    <input type="text" id="customInput" placeholder='food quantity'/>

                                    <div className={`${styles.Hold} col-md-4"`}>
                                        <Form.Select aria-label="Default select example">
                                            <option value="1">cup</option>
                                            <option value="2">pounce</option>
                                            <option value="3">grams</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                

                                <div className={`${styles.types} d-flex gap-5 mt-5 justify-content-around`}>
                                    <div className={`${styles.left}`}><h5>Carbs</h5> <span>0.85 <span>g</span></span></div>
                                    <div className={`${styles.center}`}><h5>Fat</h5> <span>0.02<span>g</span></span></div>
                                    <div className={`${styles.right}`}><h5>Protein</h5> <span>0.15<span>g</span></span></div>
                                </div>
                            </div>
                            <div className={`${styles.summary} col-md-12 mt-3`}>
                                <Table striped bordered hover variant="light">
                                    <tbody>
                                        <tr>
                                            <td colSpan={2}>Total</td>
                                            <td>2102 <span>g</span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Youd daily goal</td>
                                            <td>7120 <span>g</span></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>Remaining</td>
                                            <td >5023 <span>g</span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>


                {/* Right Side */}
                <div className={`${styles.rightELe} container col-md-4`}>
                    <h3 className='mt-3 mb-4'>Calorie Estimate</h3>
                    <div class={`${styles.circle} col-xs-4`}>
                        <div className={`${styles.content}`}>
                            <span>Total</span>
                            <div className={`${styles.data}`}>1900</div>
                            <span>kcal</span>
                        </div>
                    </div>
                    
                    <div className={`${styles.seeforU} m-4 `}><span> See how your daily calorie needs change if you alter your activity level</span></div>

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