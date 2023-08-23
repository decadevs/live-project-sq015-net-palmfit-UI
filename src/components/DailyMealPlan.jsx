import React, {useState} from 'react';
import styles from "../styles/DailyMealPlan.module.css"
import DailyPlanBreakfast from './DailyPlan/DailyPlanBreakfast';




const DailyMealPlan = () => {
    const [gender, setGender] = useState("male")

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <span>You're a</span>
                <div className={styles.btn_container}>
                    <button
                     className={`${gender == "male" ? styles.selected : styles.notSelected } ${styles.btn}`} 
                     onClick={()=>setGender("male")}>Male</button>

                    <button className={`${gender == "female" ? styles.selected : styles.notSelected} ${styles.btn}`} onClick={()=>setGender("female")}>Female</button>
                </div>
            </div>
            <DailyPlanBreakfast/>
        </div>
     
    )
}

export default DailyMealPlan;