import {useContext} from "react"
import styles from "./Navigation.module.css"
import { calculator, diary, logo_light_svg, logout, plans, profile, subscription, food, analytics, users, reviews, links, close } from "./assets"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContextConsumer } from "../../context/UserContext"


function Navigation({menuIsOpen, setMenuIsOpen }) {
  const navigate = useNavigate()
  const { userState, userDispatch } = useContext(UserContextConsumer)
  return (
    <nav className={styles.nav_con} style={{display : menuIsOpen ? "block" : "none"}} > 


      <div className={styles.logo_con} >
        <div className={styles.nav_lhs}>

          <NavLink to={"/"}>
            <img src={logo_light_svg} alt="svg logo" />
          </NavLink>

          <div className={styles.toggle_btn_con} style={{display : !menuIsOpen? "none" : "inline-block"}} onClick={()=>setMenuIsOpen(prev => !prev)}>
            {
              menuIsOpen && <img src={close} alt="" className={styles.menu_close} />
            }
          </div>
        </div>
        <div className={styles.container}>
          {/* user tabs */}
          {
              userState.userInfo.isLoggedIn === true &&

            <>
              <NavLink to={"/calorie-calulator"} className={styles.nav_link}>
                <img src={calculator} alt="svg icon" />
                <span>calorie calculator</span>
                </NavLink>
              <NavLink to={"/meal-plans"} className={styles.nav_link}>
                <img src={plans} alt="svg icon" />
                <span>meal plans</span>
                </NavLink>
              {/* <NavLink to={"/meal-diary"} className={styles.nav_link}>
                <img src={diary} alt="svg icon" />
                <span>meal diary</span>
                </NavLink> */}
              <NavLink to={"/profile"} className={styles.nav_link}>
                <img src={profile} alt="svg icon" />
                <span>profile</span>
                </NavLink>
              {/* <NavLink to={"/subscription"} className={styles.nav_link}>
                <img src={subscription} alt="svg icon" />
                <span>subscription</span>
                </NavLink> */}
            </>

            
          }
          

          {/* admin tabs */}


          {

              
            userState.role === "admin" &&

            <>
              <NavLink to={"/users"} className={styles.nav_link}>
                <img src={users} alt="svg icon" />
                <span>users</span>
                </NavLink>
              <NavLink to={"/foods"} className={styles.nav_link}>
                <img src={food} alt="svg icon" />
                <span>foods</span>
                </NavLink>
              {/* <NavLink to={"/analytics"} className={styles.nav_link}>
                <img src={analytics} alt="svg icon" />
                <span>analytics</span>
                </NavLink> */}
              <NavLink to={"/referrals"} className={styles.nav_link}>
                <img src={links} alt="svg icon" />
                <span>referrals</span>
              </NavLink>
              <NavLink to={"/reviews"} className={styles.nav_link}>
                <img src={reviews} alt="svg icon" />
                <span>reviews</span>
              </NavLink>
            </>

            
          }
          <NavLink  onClick={()=>{
            userDispatch({type: "logout", payload: false})
            navigate("/")
            window.location.reload()
          }          
            } className={styles.nav_link}>
            <img src={logout} alt="svg icon" />
            <span>logout</span>
          </NavLink>
          </div>
      </div>

    </nav>
  )
}

export default Navigation