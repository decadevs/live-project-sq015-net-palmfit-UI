import Accordion from 'react-bootstrap/Accordion';
import styles from './WeeklyPlanbreakfast.module.css'

function WeeklyPlanAccordion(props) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
            <div className={styles.Item_header}>
                <h6>Breakfast</h6>
                <span>692 calories</span>
            </div>
        </Accordion.Header>
        <Accordion.Body>
         <div className={styles.dropDown}>
                <span>rice</span>
                <span>2.5 cups</span>
                <span>605 calories</span>
                <span>Efo riro</span>
                <span>100 grams</span>
                <span>87 calories</span>
         </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
            <div className={styles.Item_header}>
                <h6>Lunch</h6>
                <span>723 calories</span>
            </div>
        </Accordion.Header>
        <Accordion.Body>
            <div className={styles.dropDown}>
                <span>rice</span>
                <span>2.5 cups</span>
                <span>605 calories</span>
                <span>Efo riro</span>
                <span>100 grams</span>
                <span>87 calories</span>
            </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
            <div className={styles.Item_header}>
                <h6>Dinner</h6>
                <span>491 calories</span>
            </div>
        </Accordion.Header>
        <Accordion.Body>
            <div className={styles.dropDown}>
                <span>Plain white rice</span>
                <span>2.5 cups</span>
                <span>605 calories</span>
                <span>Efo riro</span>
                <span>100 grams</span>
                <span>87 calories</span>
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default WeeklyPlanAccordion;