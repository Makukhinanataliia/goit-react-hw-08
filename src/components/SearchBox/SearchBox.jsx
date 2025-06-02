import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.input}
        placeholder="Search contacts"
      />
    </label>
  );
}
