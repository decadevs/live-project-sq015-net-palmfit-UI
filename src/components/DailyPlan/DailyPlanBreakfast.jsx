import React, {useState} from 'react'
import { useParams, useNavigate } from "react-router-dom"
import DailyPlanAccordion from './DailyPlanAccordion';
import styles from "../../styles/WeeklyPlanbreakfast.module.css"
import LoadingPage from '../loadingPage/LoadingPage';



function DailyPlanBreakfast() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const css = {
        borderRadius: '4px',
        backgroundColor: '#1A8D8D',
        border: 'none',
        color: '#fff',
        padding: '.5rem 1.5rem',
        textDecoration: 'none',
    }



    function handleBtnClick() {
        console.log("click")
        //do something

        
        navigate("/calorie-calulator")

        
    }
    

    return (
        <>
        <LoadingPage state={loading} />
        <div className={styles.container}>
            <div className={styles.weeklyPlan}>
                <div className={styles.header_con}>
                    <div className={styles.title_con}>
                        <h4>Name of Daily plan</h4>
                        <p>1874 calories</p>
                    </div>
                    <button type='button' style={css} onClick={handleBtnClick}>Select plan</button>
                </div>
                <div className={styles.main_body}>

                    <div className={styles.Accordion_con}>
                        <DailyPlanAccordion />
                    </div>

                </div>
            </div>
            </div>
        </>

      );
    }

export default DailyPlanBreakfast