import React from 'react'
import DailyPlanAccordion from './DailyPlanAccordion';
import styles from './DailyPlanBreakfast.module.css';

function DailyPlanBreakfast() {
 
    return (
        <div className={styles.container}>

            <div className={styles.weeklyPlan}>
                <p>You’re a</p>
                <div className={styles.header_con}>
                    <div className={styles.title_con}>
                        <h4>Name of Daily plan</h4>
                        <p>1874 calories</p>
                    </div>
                    <button type='button'>Get plan</button>
                </div>
                <div className={styles.main_body}>

                    <div className={styles.Accordion_con}>
                        <div className={styles.Accordion_title_con}>
                            {/* <h5>Day 1</h5>
                            <span>1874 calories</span> */}
                        </div>
                        <DailyPlanAccordion />
                    </div>

                </div>
            </div>
        </div>
      );
    }

export default DailyPlanBreakfast