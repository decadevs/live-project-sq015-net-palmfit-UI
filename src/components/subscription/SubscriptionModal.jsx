import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../styles/Payment.css"
// import styles from "./Frame_1786.module.css"
// import { GrStatusGood } from "react-icons/gr";
// import Payment from '../../payment/Payment';
import { Payment, Frame_1786, Frame_1927} from "../"


export default function SubscriptionModal(props) {
    const [subModal, setsubModal] = useState(false)
    const [paymentModal, setPaymentModal] = useState(false)
    // const [subModal, setsubModal] = useState(false)
    // const [subModal, setsubModal] = useState(false)

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
              {subModal && <Frame_1786 />}

              {paymentModal && <Payment />}
            
            {/* <Payment /> */}
            {/* <Frame_1927 /> */}
      </Modal.Body>
      
    </Modal>
  
  );
}