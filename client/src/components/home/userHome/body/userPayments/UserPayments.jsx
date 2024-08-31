import React from "react"
import styles from "./userPayments.module.css"

const UserPayments=()=>{
    return(
        <div className={styles.userPayments}>
        <ul>
          <li>Hami<span className={styles.details}><img src="" alt="user profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>Destination</p><p>Date</p><p>Fare</p><p>Distance Travelled</p></span></li>
          <li>Driver<span className={styles.details}><img src="" alt="user profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>Destination</p><p>Date</p><p>Fare</p><p>Distance Travelled</p></span></li>
          <li>Hami<span className={styles.details}><img src="" alt="user profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>Destination</p><p>Date</p><p>Fare</p><p>Distance Travelled</p></span></li>
          <li>Driver<span className={styles.details}><img src="" alt="user profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>Destination</p><p>Date</p><p>Fare</p><p>Distance Travelled</p></span></li>
          <li>Hami<span className={styles.details}><img src="" alt="user profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>Destination</p><p>Date</p><p>Fare</p><p>Distance Travelled</p></span></li>
          <li>Driver<span className={styles.details}><img src="" alt="user profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>Destination</p><p>Date</p><p>Fare</p><p>Distance Travelled</p></span></li>
          <li>Driver<span className={styles.details}><img src="" alt="user profile pic" style={{height:"50%", borderRadius:"50px", fontSize:"15px"}}/><p>Destination</p><p>Date</p><p>Fare</p><p>Distance Travelled</p></span></li>
        </ul>      
      </div>
    )
}

export default UserPayments;