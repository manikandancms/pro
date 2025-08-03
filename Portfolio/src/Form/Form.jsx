import React, { useRef, useState } from "react";

const Form = () => {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(""); // For validation or submission errors

  const validateForm = (formData) => {
    const name = formData.get("Name")?.trim();
    const email = formData.get("Email")?.trim();
    const message = formData.get("Message")?.trim();

    if (!name || name.length < 3) {
      setError("Please enter a valid name (at least 3 characters).");
      return false;
    }

    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!message || message.length < 10) {
      setError("Message should be at least 10 characters long.");
      return false;
    }

    setError(""); // Clear error if validation passed
    return true;
  };

  const submit = (e) => {
    e.preventDefault();

    const formElement = formRef.current;
    const formDataToSend = new FormData(formElement);

    if (!validateForm(formDataToSend)) return;

    fetch(
      "https://script.google.com/macros/s/AKfycbyZejRw-Ms6bX9-RJs6t1Qq4mRXTYWz6A_JQG1Vsjb51fzW0I2HtYXJsMWDlKy0RIlr/exec",
      {
        method: "POST",
        body: formDataToSend,
      }
    )
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
          setError(""); // clear any previous errors
          formElement.reset();
          setTimeout(() => setSuccess(false), 4000);
        } else {
          setError("Failed to submit form.");
        }
      })
      .catch(() => {
        setError("Error submitting form, please try again.");
      });
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6  font-sans mb-8 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-600">
        Share Your Thoughts 💭
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
        {/* Success message just under the button */}
        {success && (
          <div className="mt-4 text-green-600 text-center font-semibold text-lg">
            Successfully sent your Message
          </div>
        )}
        {/* Validation or submission error message */}
        {error && (
          <div className="mt-4 text-red-600 text-center font-semibold text-lg">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
