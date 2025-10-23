import React from 'react'
import "./navigation.css"
import { Link, NavLink, useLocation } from "react-router-dom";




const navigation = () => {
  return (
    <div className="navBG"> <NavLink
      to="/"
      end
      className={({ isActive }) => 
        isActive ? "navbtnHome active" : "navbtnHome"
      }
    ></NavLink>

      <NavLink
        to="/work"
        className={({ isActive }) =>
          isActive ? "navbtntText active" : "navbtntText"
        }
      >
        ✦ Projects
      </NavLink>

      <NavLink
        to="/design"
        className={({ isActive }) =>
          isActive ? "navbtntText active" : "navbtntText"
        }
      >
        ✦ Design
      </NavLink>

      <NavLink
        to="/playground"
        className={({ isActive }) =>
          isActive ? "navbtntText active" : "navbtntText"
        }
      >
        ✦ Playground
      </NavLink>
    </div>
  )
}

export default navigation

