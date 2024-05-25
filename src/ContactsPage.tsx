// src/pages/ContactsPage.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from './contactsSlice';
import { Contact } from './types';
import { RootState } from './store';
import Modal from 'react-modal';

import ContactForm from './contactForm';

Modal.setAppElement('#root'); // replace '#root' with the id of your app's root element

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
  },
};

const ContactsPage = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddContact = (contact: Contact) => {
    dispatch(addContact(contact));
    setModalIsOpen(false);
  };

  return (
    <div style={{ padding: '20px', fontSize:'4vh', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Contacts</h1>
      <button onClick={() => setModalIsOpen(true)}>Add Contact</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
        <h2 style={{ textAlign: 'center' }}>Add New Contact</h2>
        <button onClick={() => setModalIsOpen(false)} style={{ float: 'right', cursor: 'pointer' }}>X</button>
        <ContactForm onAdd={handleAddContact} />
      </Modal>
      {contacts.length > 0 ? (
        <ul style={{ marginTop: '20px', listStyleType: 'none', paddingLeft: '0' }}>
          {contacts.map((contact, index) => (
            <li key={index} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
              {contact.name} {contact.phone} 
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactsPage;

