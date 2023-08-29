import styles from "./Loading.module.css"
import Modal from 'react-bootstrap/Modal';
import loading from "./loading.gif"


function LoadingPage({state}) {

  return (
    <div className={styles.con} style={{"display": state? "block" : "none"}}>
      <img src={loading} className={styles.color_overlay_image} />

    </div>
  );
 
}

export default LoadingPage