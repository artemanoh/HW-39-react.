import { Component } from 'react';
import './App.css';
import PhoneContacts from './components/PhoneContacts';
import PhoneInput from './components/PhoneInput';
import { nanoid } from 'nanoid';
import Filter from './components/Filter';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/operations";

function App() {
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);
  // handleFilterChange = (event) => {
  //   this.setState({ filter: event.target.value })
  // };



  // handleChange = (event) => {
  //   const { value, name } = event.target;
  //   this.setState({ [name]: value });
  // }

  // handleDeleteContact = (id) => {
  //   this.setState(prev => ({
  //     contacts: prev.contacts.filter(contact => contact.id !== id)
  //   }));
  // }

  // handleAddContact = (name, number) => {
  //   const isDuplicate = this.state.contacts.some(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   )

  //   if (isDuplicate) {
  //     alert(`Contact ${name} is already in contacts!`)
  //     return;
  //   }
  //   const newContact = { id: nanoid(), name, number };
  //   this.setState(prev => ({
  //     contacts: [...prev.contacts, newContact],
  //   }));
  // };

  // render() {
  //   const normalisedFilter = this.state.filter.toLowerCase();
  //   const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalisedFilter));
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
// }
// тяжко тяжко:(
export default App;
