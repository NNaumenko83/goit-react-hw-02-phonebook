const ContactItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <li>
      {name}:{number}
      <button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
