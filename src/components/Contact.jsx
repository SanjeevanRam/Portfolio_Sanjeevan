import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowPopup(true);
    resetForm();

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>
      <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto">
        {["name", "email", "message"].map((field, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={field} className="block text-left mb-2 capitalize">
              {field}
            </label>
            {field !== "message" ? (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded text-black"
              />
            ) : (
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded text-black"
                rows="4"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 mt-20 flex justify-center">
          <div className="bg-green-500 text-white p-4 rounded shadow-lg">
            Message Sent Successfully!
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;