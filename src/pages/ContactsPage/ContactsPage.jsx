import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import styles from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Contacts</h2>
      <ContactsForm />
      <ContactList />
    </div>
  );
}
