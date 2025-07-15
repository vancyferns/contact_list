import React from "react";

// ✅ Use the deployed backend URL here or from .env
const API_BASE_URL = "https://contact-list-9x5p.onrender.com";

const ContactList = ({ contacts, updateContact, updateCallback }) => {
  const onDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/delete_contact/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Contact deleted successfully!");
        if (updateCallback) updateCallback();
      } else {
        const err = await response.json();
        console.error("Failed to delete contact:", err.message);
        alert("Failed to delete contact.");
      }
    } catch (error) {
      alert("Error deleting contact: " + error.message);
    }
  };

  return (
    <div>
      <h2>Contacts</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>
                <button onClick={() => updateContact(contact)}>Update</button>
                <button onClick={() => onDelete(contact.id)} style={{ marginLeft: "10px" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
