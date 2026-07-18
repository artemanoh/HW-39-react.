import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Navigation.module.css";
function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
   <nav className={styles.nav}>
      <NavLink
  className={({isActive}) =>
    isActive ? styles.active : styles.link
  }
 to="/contacts">
        Contacts
      </NavLink>

      {!isLoggedIn && (
        <>
          <NavLink
            className={({isActive}) =>
              isActive ? styles.active : styles.link
            }
            to="/login"
          >
            Login
          </NavLink>

          <NavLink
            className={({isActive}) =>
              isActive ? styles.active : styles.link
            }
            to="/register"
          >
            Register
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navigation;