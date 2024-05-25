// src/components/ContactForm.tsx
import React, { useState } from 'react';
import { Contact } from './types';

interface Props {
  onAdd: (contact: Contact) => void;
}

const ContactForm: React.FC<Props> = ({ onAdd }) => {
  const [contact, setContact] = useState<Contact>({ id: '', name: '', email: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(contact);
    setContact({ id: '', name: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={contact.id}
        onChange={(e) => setContact({ ...contact, id: e.target.value })}
        placeholder="ID"
      />
      <input
        type="text"
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="tel"
        value={contact.phone}
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        placeholder="Phone"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
