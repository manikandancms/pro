import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; // Make sure Tailwind CSS is imported here

const Form = () => {
  const formRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();

    const formElement = formRef.current;
    const formDataToSend = new FormData(formElement);

    // Email validation removed (no checks)

    fetch(
      "https://script.google.com/macros/s/AKfycbyZejRw-Ms6bX9-RJs6t1Qq4mRXTYWz6A_JQG1Vsjb51fzW0I2HtYXJsMWDlKy0RIlr/exec",
      {
        method: "POST",
        body: formDataToSend,
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully!");
          formElement.reset();
        } else {
          alert("Failed to submit form.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Error submitting form, please try again.");
      });
      console.log("submitted");
      
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md font-sans">
      <h1 className="text-3xl font-semibold text-center mb-8 text-indigo-700">
        Contact Me Form
      </h1>
      <form ref={formRef} onSubmit={submit} className="flex flex-col">
        <label htmlFor="Name" className="mb-2 font-medium text-gray-700">
          Name
        </label>
        <input
          id="Name"
          name="Name"
          type="text"
          placeholder="Enter your name"
          className="mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />
        <label htmlFor="Email" className="mb-2 font-medium text-gray-700">
          Email
        </label>
        <input
          id="Email"
          name="Email"
          type="email"
          placeholder="Enter your email"
          className="mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />
        <label htmlFor="Message" className="mb-2 font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="Message"
          name="Message"
          placeholder="Enter your message"
          rows={4}
          className="mb-6 px-4 py-2 border border-gray-300 rounded resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white font-semibold py-3 px-4 rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);
