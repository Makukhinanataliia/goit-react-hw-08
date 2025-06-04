import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";

export default function UserMenu({ user }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.userMenu}>
      <span className={styles.greeting}>Welcome, {user.name}</span>
      <button type="button" className={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
