import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <ul className={styles.navList}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
          end
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
}
