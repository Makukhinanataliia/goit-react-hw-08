import ContactsForm from "./components/ContactsForm/ContactsForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactsForm />
      <h2 className={styles.subtitle}>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
}
