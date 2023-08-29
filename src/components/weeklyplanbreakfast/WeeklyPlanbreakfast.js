import React from 'react'
import WeeklyPlanAccordion from './WeeklyPlanAccordion';
import styles from '../../styles/WeeklyPlanbreakfast.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import backBtn from "./backBtn.svg"

function WeeklyPlanbreakfast() {
    const { page } = useParams()
    const navigate = useNavigate()
    
    function handleBtnClick() {
        console.log("click")
        navigate("/calorie-calulator")
    }

    return (
        <div className={styles.container}>

            <div className={styles.weeklyPlan}>
                <img src={backBtn} alt="svg icon" className={styles.backBtn} onClick={()=>navigate(-1)} />
                <div className={styles.header_con}>
                    <div className={styles.title_con}>
                        <h4>Name of weekly plan</h4>
                        <p>Daily average of 1874 calories</p>
                    </div>
                    <div>
                        <button type='button' onClick={handleBtnClick}>Select plan</button>
                    </div>
                </div>
                <div className={styles.main_body}>

                   

                    <div className={styles.Accordion_con}>
                        <div className={styles.Accordion_title_con}>
                            <h5>Day 1</h5>
                            <span>1874 calories</span>
                        </div>
                        <WeeklyPlanAccordion />
                    </div>


                    <div className={styles.Accordion_con}>
                        <div className={styles.Accordion_title_con}>
                            <h5>Day 2</h5>
                            <span>1874 calories</span>
                        </div>
                        <WeeklyPlanAccordion />
                    </div>

                </div>
            </div>
        </div>
      );
    }

export default WeeklyPlanbreakfast