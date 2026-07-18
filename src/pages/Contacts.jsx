import { useEffect } from "react";
import { useDispatch } from "react-redux";

import PhoneContacts from "../components/PhoneContacts";
import PhoneInput from "../components/PhoneInput";
import Filter from "../components/Filter";

import { fetchContacts } from "../redux/operations";

function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>

      <PhoneInput />

      <h2>Contacts</h2>

      <Filter />

      <PhoneContacts />
    </div>
  );
}

export default Contacts;