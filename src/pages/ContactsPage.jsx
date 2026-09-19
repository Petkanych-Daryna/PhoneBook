import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import {
  addContactsApi,
  deleteContactApi,
  fetchContacts,
} from "../services/api";

export const ContactsPage = ({ token }) => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const filtered = contacts.filter((contact) =>
    `${contact.name} ${contact.number}`
      .toLowerCase()
      .includes(filter.toLowerCase()),
  );

  useEffect(() => {
    fetchContacts(token).then(setContacts);
  }, [token]);

  const handleAdd = (newContact) => {
    addContactsApi(newContact, token).then((data) =>
      setContacts((prev) => [...prev, data]),
    );
  };

  const handleDelete = (id) => {
    deleteContactApi(id, token).then(() =>
      setContacts((prev) => prev.filter((c) => c.id !== id)),
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAdd}/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ContactList contacts={filtered} onDeleteContact={handleDelete} />
    </div>
  );
};
