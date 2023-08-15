import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./Frame_1786.module.css"
import { GrStatusGood } from "react-icons/gr";


export default function Frame_1786(props) {
  return (
      
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.top}>
          <p>Offer includes first week free trial</p>
        </div>
        
        <div className={styles.body_container}>
          <div className={styles.body_con_top}>
            <h3>Premium Individual</h3>
            <span>1 account</span>
          </div>

          <div className={styles.body_con_bottom}>
            <div className={styles.list}>
              <GrStatusGood style={{color: "#fff"}} fill='#fff' className={styles.icon} />
              <p>Only #1,000 after 1 week trial</p>
            </div>
            <div className={styles.list}>
              <GrStatusGood className={styles.icon} />
              <p>You won't be charged unless you subscribe each month</p>
            </div>
            <div className={styles.list}>
              <GrStatusGood className={styles.icon} />
              <p>Fund your virtual wallet for automatic billing</p>
            </div>
          </div>

        </div>

          <a href='#' type='button' className={styles.btn}>Proceed</a>
      </Modal.Body>
      
    </Modal>
  
  );
}