import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../styles/Payment.css"
import { Payment, Frame_1786, Frame_1927} from "../"


export default function SubscriptionModal(props) {
  const [subModal, setSubModal] = useState("subcription")

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
        {
          subModal == "subcription" ? <Frame_1786 setModal={setSubModal} /> :
            subModal == "payment" ? <Payment onHide={props.onHide} setModal={setSubModal} /> : ""
            
        }

      </Modal.Body>
      
    </Modal>
  
  );
}