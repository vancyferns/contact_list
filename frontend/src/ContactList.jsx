import React from "react";

const ContactList = ({ contacts, updateContact, updateCallback }) => {
  const onDelete = async (id) => {
    try {
      const options = {
        method: "DELETE"
      };

      const response = await fetch(`https://turbo-winner-4x57j4jrjgvhjqjj-8000.app.github.dev/delete_contact/${id}`, options);

      if (response.status === 200) {
        alert("Contact deleted successfully!");
        if (updateCallback) updateCallback();
      } else {
        console.error("Failed to delete contact.");
      }
    } catch (error) {
      alert("Error deleting contact: " + error.message);
    }
  };

  return (
    <div>
      <h2>Contacts</h2>
      <table border="1" cellPadding="10">
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
              <td data-label="First Name">{contact.firstName}</td>
              <td data-label="Last Name">{contact.lastName}</td>
              <td data-label="Email">{contact.email}</td>
              <td data-label="Actions">
                <button onClick={() => updateContact(contact)}>Update</button>
                <button onClick={() => onDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
