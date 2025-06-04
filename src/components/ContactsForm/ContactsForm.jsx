import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/contacts/operations";
import styles from "./ContactsForm.module.css";

export default function ContactsForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === normalizedName
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }))
      .unwrap() 
      .then(() => {
        setName("");
        setNumber("");
      })
      .catch(() => {
        alert("Failed to add contact. Please try again.");
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          placeholder="Enter name"
          required
          disabled={loading} 
        />
      </label>
      <label className={styles.label}>
        Telephone Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={styles.input}
          placeholder="Enter number"
          required
          disabled={loading} 
        />
      </label>
      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? "Adding..." : "Add contact"}
      </button>
    </form>
  );
}
