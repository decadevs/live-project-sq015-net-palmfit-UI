import React, {useState} from 'react';
import styles from "../styles/DailyMealPlan.module.css"





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

            <div className={styles.header_container}>
                <div>
                    <h5>Name of daily plan</h5>
                    <span style={{fontSize: '15px', color: '#6E767E', fontFamily: 'nunito sans'}}>17777 calories</span>
                </div>
                <button className={`${styles.btn_getplan} ${styles.selected}`}>Get Plan</button>
            </div>

            <table className={styles.DailyMealTable}>
                <tbody>
                    <tr >
                        <td className={styles.one}>Breakfast</td>
                        <td className={styles.td}>7629 Calories</td>
                       
                    </tr>
                    <tr>
                        <td className={styles.one}>Lunch</td>
                        <td className={styles.td}>7629 Calories</td>
                        
                    </tr>
                    <tr>
                        <td className={styles.one}>Dinner</td>
                        <td className={styles.td}>7543 Calories</td>
                        
                    </tr>

                </tbody>
            </table> 

             <div>
               <button className={styles.btn_total}><span>Total : <span>1906</span> calories</span></button> 
            </div>
           
        </div>
     
    )
}

export default DailyMealPlan;