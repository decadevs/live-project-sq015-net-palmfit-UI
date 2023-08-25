import styles from "./Subscription.module.css";
import Frame_1786 from "../subscriptionFrames/frame_1786/Frame_1786";
import {useState} from "react"
import {Frame_1927} from "../";

function Subscription() {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  function handleShow() {
    setShowSubscriptionModal(true)
  }

  function handlePaymentModal() {
    setShowPaymentModal(true)
  }

  return (
    <div className={styles.container}>
      <Frame_1786
        show={showSubscriptionModal}
        onHide={() => setShowSubscriptionModal(false)}
      />

      
     
      <div className={styles.content_container}>
        <h3>Active plan</h3>
        <p>
          You are currently not subscribed to any plan. Check below for our
          pricing to get started.
        </p>
        <div className={styles.btn_con}>
          <button onClick={handleShow} className={styles.btn} type="button">
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
        <button onClick={handlePaymentModal} type="button" className={styles.btn_secondary}>
          Fund Wallet
        </button>
      </div>
    </div>
  );
}

export default Subscription;
