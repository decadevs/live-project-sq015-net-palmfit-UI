import styles from "./Subcription.module.css"

function Subcription() {
  return (
    <div className={styles.container}>
      <h3>Active plan</h3>
      <p>
        You are currently not subscribed to any plan. Check below for our
        pricing to get started.
      </p>
      <div>
        <button className={styles.btn} type="button">
          Subscribe
        </button>
      </div>

      <div className={styles.wallet_container}>
        <div className={styles.top_half}>
          <span>Palmfit Wallet</span>
          <span>#29,500</span>
              </div>
              <span>paid out</span>
          </div>
          <button type="button" >Fund Wallet</button>
    </div>
  );
}

export default Subcription