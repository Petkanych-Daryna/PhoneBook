import React, { useState } from "react";

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ border: "1px solid black", padding: "10px", width: "300px" }}
    >
      <label>
        Name
        <br />
        <input
          type="text"
          name="write name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </label>
      <br />
      <label>
        Number
        <br />
        <input
          type="tel"
          name="write number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
          required
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
