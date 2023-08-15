import React, { useEffect } from 'react'
import WeeklyPlanAccordion from './WeeklyPlanAccordion';
import styles from './WeeklyPlanbreakfast.module.css'

function WeeklyPlanbreakfast() {
 

    return (
        <div className={styles.container}>

            <div className={styles.weeklyPlan}>
                <div className={styles.header_con}>
                    <div className={styles.title_con}>
                        <h4>Name of weekly plan</h4>
                        <p>Daily average of 1874 calories</p>
                    </div>
                    <button type='button'>Get plan</button>
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