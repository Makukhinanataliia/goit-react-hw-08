import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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

      {isLoggedIn && (
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
      )}
    </ul>
  );
}
