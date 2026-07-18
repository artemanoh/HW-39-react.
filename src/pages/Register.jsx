import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/operations";
import styles from "./Register.module.css";
import { useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async e => {
  e.preventDefault();

  const result = await dispatch(register(form));

  if (register.fulfilled.match(result)) {
    navigate("/contacts");
  }

    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Register</h1>

      <input
        className={styles.input}
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        className={styles.input}
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        className={styles.input}
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      <button className={styles.button} type="submit">
        Register
      </button>
    </form>
  );
}