import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ id: nanoid(), ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ border: '1px solid black', padding: '10px', width: '300px' }}>
        <label> Name <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <br />
        <label> Number <br />
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
        </label>
        <br /><br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;