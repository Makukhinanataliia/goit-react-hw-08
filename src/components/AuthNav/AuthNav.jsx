import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <ul className={styles.authNav}>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
}
