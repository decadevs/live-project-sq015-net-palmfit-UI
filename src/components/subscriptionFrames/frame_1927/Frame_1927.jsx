import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./Frame_1786.module.css"
import { GrStatusGood } from "react-icons/gr";
import Payment from '../../payment/Payment';


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
        <Payment/>
      </Modal.Body>
      
    </Modal>
  
  );
}