import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/slice";
import { fetchContacts } from "../../redux/contacts/operations";
import Spinner from "../Spinner/Spinner"; 

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
