import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/operations";

function UserMenu() {
  const dispatch = useDispatch();

  const email = useSelector(
    state => state.auth.user.email
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{email}</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;