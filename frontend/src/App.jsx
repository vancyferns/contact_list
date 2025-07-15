import { useEffect, useState } from 'react';
import ContactList from './ContactList';
import './App.css';
import ContactForm from './ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState({});

  const API_BASE_URL = "https://contact-list-9x5p.onrender.com"; // ✅ Updated URL

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`);
      const data = await response.json();
      if (Array.isArray(data.contacts)) {
        setContacts(data.contacts);
      }
    } catch (err) {
      console.error("Failed to fetch contacts:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContact({});
  };

  const openCreateModal = () => {
    if (!isModalOpen) {
      setCurrentContact({});
      setIsModalOpen(true);
    }
  };

  const openEditModal = (contact) => {
    if (!isModalOpen) {
      setCurrentContact(contact);
      setIsModalOpen(true);
    }
  };

  const onUpdate = () => {
    closeModal();
    fetchContacts();
  };

  return (
    <div className="app-container">
      <h1>📇 Contact Manager</h1>

      <ContactList contacts={contacts} updateContact={openEditModal} updateCallback={onUpdate} />
      <button onClick={openCreateModal} className="create-btn">Create New Contact</button>

      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <ContactForm
            existingContact={currentContact}
            onContactAdded={fetchContacts}
            updateCallback={onUpdate}
            apiBaseUrl={API_BASE_URL} // ✅ optionally pass it to the form
          />
        </div>
      )}
    </div>
  );
}

export default App;
