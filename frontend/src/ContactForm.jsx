import { useEffect, useState } from "react";

const ContactForm = ({ onContactAdded, existingContact = {}, updateCallback }) => {
  const [firstName, setFirstName] = useState(existingContact.firstName || "");
  const [lastName, setLastName] = useState(existingContact.lastName || "");
  const [email, setEmail] = useState(existingContact.email || "");

  const updating = Object.keys(existingContact).length !== 0;

  useEffect(() => {
    if (existingContact) {
      setFirstName(existingContact.firstName || "");
      setLastName(existingContact.lastName || "");
      setEmail(existingContact.email || "");
    }
  }, [existingContact]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      alert("Please fill in all fields.");
      return;
    }

    const data = { firstName, lastName, email };

    try {
      const response = await fetch(
        `https://turbo-winner-4x57j4jrjgvhjqjj-8000.app.github.dev/${updating ? `update_contact/${existingContact.id}` : "create_contact"}`,
        {
          method: updating ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const message = await response.json();

      if (!response.ok) {
        alert(message.message);
      } else {
        alert(updating ? "Contact updated successfully!" : "Contact created successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");

        if (onContactAdded) onContactAdded();
        if (updateCallback) updateCallback();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: "white",
        padding: "2rem",
        margin: "2rem 5%",
        width: "90%",
        borderRadius: "1rem",
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
        boxSizing: "border-box",
        textAlign: "left",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        {updating ? "Update Contact" : "Add New Contact"}
      </h2>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="firstName" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          autoComplete="off"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="lastName" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          autoComplete="off"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
          Email
        </label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "1rem",
            boxSizing: "border-box",
            wordBreak: "break-word",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#6c5ce7",
          color: "white",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
          fontSize: "1rem",
          display: "block",
          margin: "0 auto",
        }}
      >
        {updating ? "Update Contact" : "Create Contact"}
      </button>
    </form>
  );
};

export default ContactForm;
