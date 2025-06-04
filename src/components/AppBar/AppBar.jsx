import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import styles from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu user={user} /> : <AuthNav />}
      </nav>
    </header>
  );
}
