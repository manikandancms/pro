import "./style.css";
import ReactDOM from "react-dom/client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    alert(`Thank you, ${formData.Name}! Your message has been received.`);
  };

  return (
    <div>
      <h1>Contact me Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          name="Name"
          type="text"
          value={formData.Name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Email"
          name="Email"
          type="email"
          value={formData.Email}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Message"
          name="Message"
          value={formData.Message}
          onChange={handleChange}
          required
          rows={4}
          cols={30}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form