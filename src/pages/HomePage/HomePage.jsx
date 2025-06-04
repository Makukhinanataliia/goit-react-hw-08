import React from "react";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Phonebook App</h1>
      <p className={styles.text}>
        This is a simple contact manager. Please register or log in to manage
        your contacts.
      </p>
    </div>
  );
}
