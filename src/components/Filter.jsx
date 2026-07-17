import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filterSlice";


function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={handleChange}
      className={styles.filterInput}
    />
  );
}

export default Filter;