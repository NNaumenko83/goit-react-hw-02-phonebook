import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { ContactsTitle, Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    console.log(name);
    this.setState({ [name]: value });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  addContact = ({ name, number }) => {
    if (this.checkContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  checkContact = checkedNameContact => {
    const res = this.state.contacts.find(
      contact => contact.name === checkedNameContact
    );
    return res;
  };

  getVisibleContacts = normalizedFilter => {
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const visibleContats = this.getVisibleContacts(normalizedFilter);

    return (
      <Container>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <ContactsTitle>Contacts</ContactsTitle>

        <Filter value={this.state.filter} onInputChange={this.changeFilter} />

        <ContactList
          contacts={visibleContats}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
