import React from 'react'
import { Navigation } from "../"
import { logo_dark_svg, menu } from "./assets";
import {NavLink} from "react-router-dom"


function NavigationBar({menuIsOpen, setMenuIsOpen}) {
  return (
      // <div>
          <div className="nav">
          <NavLink to={"/"}>
            <img src={logo_dark_svg} alt="svg logo" className="nav-logo" />
          </NavLink>
          <Navigation menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          <div
            className="toggle_btn_con"
            style={{ display: menuIsOpen ? "none" : "block" }}
            onClick={() => setMenuIsOpen((prev) => !prev)}
          >
            {!menuIsOpen && <img src={menu} alt="" className="menu_open" />}
          </div>
        </div>
    // </div>
  )
}

export default NavigationBar