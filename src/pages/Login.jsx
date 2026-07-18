import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/operations";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

  const result = await dispatch(login(form));

  if (login.fulfilled.match(result)) {
    navigate("/contacts");
  }
};

  return (
   <form className={styles.form} onSubmit={handleSubmit}>
     <h1>Login</h1>
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
        Login
      </button>
    </form>
  );
}