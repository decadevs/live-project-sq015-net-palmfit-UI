import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../styles/Payment.css"
import { FundNow } from "../"


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
          <FundNow setModal={props.onHide} />
        }

      </Modal.Body>
      
    </Modal>
  
  );
}