import { ContItem, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <ContItem>
      {name}: {number}
      <Button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </Button>
    </ContItem>
  );
};

export default ContactItem;
