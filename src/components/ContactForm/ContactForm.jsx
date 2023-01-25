import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = { name: '', number: '' };

class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    console.log(resetForm);

    this.props.onSubmit(values);

    resetForm();
  };

  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
        <Form autoComplete="off">
          <label>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              // value={this.state.name}
              // onChange={this.handleInputChange}
            />
          </label>

          <label>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // value={this.state.number}
              // onChange={this.handleInputChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}

export default ContactForm;
