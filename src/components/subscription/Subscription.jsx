import styles from "./Subscription.module.css";

import {useState} from "react"

function Subscription() {

    const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    

  return (
    <div className={styles.container}>

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
        <button type="button" className={styles.btn_secondary}>
          Fund Wallet
        </button>
      </div>
    </div>
  );
}

export default Subscription;