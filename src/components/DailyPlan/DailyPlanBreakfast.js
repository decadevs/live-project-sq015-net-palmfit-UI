import React from 'react'
import {useParams, Link} from "react-router-dom"
import DailyPlanAccordion from './DailyPlanAccordion';
// import styles from './DailyPlanBreakfast.module.css';
import styles from "../../styles/WeeklyPlanbreakfast.module.css"
// import styles from '../../styles/WeeklyPlanbreakfast.module.css';



function DailyPlanBreakfast() {
    const { id } = useParams();

    const css = {
        borderRadius: '4px',
        backgroundColor: '#1A8D8D',
        border: 'none',
        color: '#fff',
        padding: '.5rem 1.5rem',
        textDecoration: 'none',
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.weeklyPlan}>
                <div className={styles.header_con}>
                    <div className={styles.title_con}>
                        <h4>Name of Daily plan</h4>
                        <p>1874 calories</p>
                    </div>
                    <Link style={css} to='/get-plan'>Get plan</Link>
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