import ContactItem from 'components/ContactItem';
import { ContList } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContList>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ContList>
  );
};

export default ContactList;
