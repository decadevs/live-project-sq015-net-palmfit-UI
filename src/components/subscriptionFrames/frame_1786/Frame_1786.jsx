import React from 'react'
import styles from "./Frame_1786.module.css"
import icon from "./Icon.svg"



function Frame_1786() {
  return (
    <>
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
            <img src={icon} alt="" className={styles.icon} />
            <p>Only #1,000 after 1 week trial</p>
          </div>
          <div className={styles.list}>
            <img src={icon} alt="" className={styles.icon} />
            <p>You won't be charged unless you subscribe each month</p>
          </div>
          <div className={styles.list}>
            <img src={icon} alt="" className={styles.icon} />
            <p>Fund your virtual wallet for automatic billing</p>
          </div>
        </div>

      </div>

      {/* <button onClick={() => setShouldProceed(true)} type='button' className={styles.btn}>Proceed</button> */}
      <button type='button' className={styles.btn}>Proceed</button>

    </>
        
  )
}

export default Frame_1786




































// import {useState} from "react"
// import Modal from 'react-bootstrap/Modal';
// import styles from "./Frame_1786.module.css"
// import { GrStatusGood } from "react-icons/gr";
// import { Frame_1927 } from "../../"
// import icon from "./Icon.svg"


// export default function Frame_1786(props) {

//   const [shouldProceed, setShouldProceed] = useState(false)



     
//   // if (!shouldProceed)
//   //   return (
  
     
  
//     // )
  

//   return (

   
        
      
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//       </Modal.Header>
//       <Modal.Body>

//         {
//           shouldProceed ?
//             <Frame_1927
//               show={shouldProceed}
//               onHide={() => setShouldProceed(false)}
//             />
          
//             :

//             <>
//               <div className={styles.top}>
//                 <p>Offer includes first week free trial</p>
//               </div>
              
//               <div className={styles.body_container}>
//                 <div className={styles.body_con_top}>
//                   <h3>Premium Individual</h3>
//                   <span>1 account</span>
//                 </div>


//                 <div className={styles.body_con_bottom}>
//                   <div className={styles.list}>
//                     <img src={icon} alt="" className={styles.icon} />
//                     <p>Only #1,000 after 1 week trial</p>
//                   </div>
//                   <div className={styles.list}>
//                     <img src={icon} alt="" className={styles.icon} />
//                     <p>You won't be charged unless you subscribe each month</p>
//                   </div>
//                   <div className={styles.list}>
//                     <img src={icon} alt="" className={styles.icon} />
//                     <p>Fund your virtual wallet for automatic billing</p>
//                   </div>
//                 </div>

//               </div>

//               <button onClick={() => setShouldProceed(true)} type='button' className={styles.btn}>Proceed</button>
//             </>
        
//         }
//       </Modal.Body>
      
//     </Modal>
  
//   );
// }