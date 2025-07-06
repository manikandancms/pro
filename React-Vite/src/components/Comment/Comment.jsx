import { useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

const Comment = () => {
  const [message, setMessage] = useState({ name: "", message: "" });
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if (message.name.trim() === "" || message.message.trim() === "") {
      toast.error("Please fill out both fields.");
      return;
    }

    const newComment = {
      ...message,
      timestamp: new Date().toLocaleString(),
    };

    setData((prev) => [...prev, newComment]);
    setMessage({ name: "", message: "" });
    toast.success("✅ Comment submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 flex flex-col items-center px-4 py-10 space-y-10">
      <Toaster position="top-center" />

      {/* About Clicker - More Detailed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl text-center space-y-4"
      >
        <h1 className="text-4xl font-bold text-violet-800">📦 Welcome to Clicker</h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          We are proud to serve you with fast and reliable delivery of all your daily essentials.
        </p>
        <p className="text-md text-gray-700">
          From fresh vegetables to pantry staples, our platform helps you shop effortlessly.
        </p>
        <p className="text-md text-gray-700">
          Whether you're a student, a working professional, or a homemaker —
          <span className="font-medium text-violet-700"> Clicker</span> is designed to save you time.
        </p>
        <p className="text-md text-gray-700">
          Join thousands of users and enjoy a seamless shopping experience built with modern tech.
        </p>
      </motion.div>

      {/* Comment Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-violet-800 text-center">
          💬 Share Your Experience
        </h2>

        <p className="text-sm text-gray-600 text-center">
          Tell us how Clicker helped you or what we can do better!
        </p>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-800 font-medium">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. John Doe"
            value={message.name}
            onChange={(e) =>
              setMessage((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-400 focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="comment" className="block text-gray-800 font-medium">
            Your Comment:
          </label>
          <textarea
            id="comment"
            rows="5"
            placeholder="Write your feedback or experience here..."
            value={message.message}
            onChange={(e) =>
              setMessage((prev) => ({ ...prev, message: e.target.value }))
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-violet-400 focus:outline-none resize-none"
          ></textarea>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2.5 bg-violet-700 hover:bg-violet-600 text-white font-semibold rounded-md transition duration-200"
        >
          ➤ Submit Comment
        </button>
      </motion.div>

      {/* Comments Display */}
      {data.length > 0 && (
        <div className="w-full max-w-md space-y-6 mt-10">
          <h3 className="text-xl font-semibold text-gray-900 text-center underline underline-offset-4">
            🗨️ What Others Are Saying
          </h3>

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-5 rounded-xl shadow border border-gray-200 space-y-2"
            >
              <div className="flex items-center gap-3">
                <div className="bg-violet-700 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center text-lg">
                  {item.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.timestamp}</p>
                </div>
              </div>
              <p className="text-gray-700 mt-2 whitespace-pre-line">{item.message}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
