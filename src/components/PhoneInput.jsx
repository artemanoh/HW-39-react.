import styles from './PhoneInput.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  addContact,
} from "../redux/operations";

function PhoneInput() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    number: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact({
  name: form.name,
  phone: form.number
}));
    setForm({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.phoneForm}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я]+)*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces"
        required
          placeholder="Enter name"
          className={styles.inputField}
        />
        <input
          type="tel"
          name="number"
          value={form.number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitBtn}>Add contact</button>
      </form>
    );
  }


export default PhoneInput;
