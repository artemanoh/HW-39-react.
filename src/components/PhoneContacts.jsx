import styles from "./PhoneContact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/operations";
import { selectContacts } from "../redux/selectors";


function PhoneContacts() {
  const dispatch = useDispatch();

 const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <li className={styles.contactItem} key={contact.id}>
          {contact.name} : {contact.phone}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PhoneContacts;