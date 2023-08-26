import styles from "./Subscription.module.css";
import Frame_1786 from "../subscriptionFrames/frame_1786/Frame_1786";
import {useState} from "react"
import SubscriptionModal from "./SubscriptionModal";

function Subscription() {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false)



  //new
  const [subModal, setsubModal] = useState(false)
  const [paymentModal, setPaymentModal] = useState(false)
  const [modal, setModal] = useState(false)

  function handleShow(selection) {
    
  }

  // function handlePaymentModal() {
  //   setShowPaymentModal(true)
  // }

  return (
    <div className={styles.container}>
      {/* <Frame_1786
        show={showSubscriptionModal}
        onHide={() => setShowSubscriptionModal(false)}
      /> */}

      <SubscriptionModal show = {modal} onHide={()=>setModal(false)} />

      
     
      <div className={styles.content_container}>
        <h3>Active plan</h3>
        <p>
          You are currently not subscribed to any plan. Check below for our
          pricing to get started.
        </p>
        <div className={styles.btn_con}>
          <button onClick={handleShow("subscription")} className={styles.btn} type="button">
            Subscribe
          </button>
        </div>

        <div className={styles.wallet_container}>
          <div className={styles.top_half}>
            <span>Palmfit Wallet</span>
            <span>#29,500</span>
          </div>
          <span className={styles.paid}>paid out</span>
        </div>
        <button onClick={handleShow("payment")} type="button" className={styles.btn_secondary}>
          Fund Wallet
        </button>
      </div>
    </div>
  );
}

export default Subscription;
