import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.item}>
      <p className={styles.text}>
        <span className={styles.name}>{name}</span>: {number}
      </p>
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </li>
  );
}
