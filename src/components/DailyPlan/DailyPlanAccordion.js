//import Accordion from 'react-bootstrap/Accordion';
import styles from './DailyPlanBreakfast.module.css';
import { Link, useNavigate } from 'react-router-dom';
import arrow from './arrow.svg'


function DailyPlanAccordion() {
  // const history = useNavigate()


  return (
    <div className={styles.con__}>

      <div className={styles.item}>
        <Link to={`/get-plan/${1}`} className={styles.link}>
          <div className={styles.text_con}>
            <span>Week 1</span>
            <span>meal plan</span>
          </div>
          <img src={arrow} alt="" />
        </Link>
      </div>

      <div className={styles.item}>
        <Link to={`/get-plan/${2}`} className={styles.link}>
          <div className={styles.text_con}>
            <span>Week 2</span>
            <span>meal plan</span>
          </div>
          <img src={arrow} alt="" />
        </Link>
      </div>


      <div className={styles.item}>
        <Link to={`/get-plan/${3}`} className={styles.link}>
          <div className={styles.text_con}>
            <span>Week 3</span>
            <span>meal plan</span>
          </div>
          <img src={arrow} alt="" />
        </Link>
      </div>


      <div className={styles.item}>
        <Link to={`/get-plan/${4}`} className={styles.link}>
          <div className={styles.text_con}>
            <span>Week 4</span>
            <span>meal plan</span>
          </div>
          <img src={arrow} alt="" />
        </Link>
      </div>


    </div>
  );
}

export default DailyPlanAccordion;