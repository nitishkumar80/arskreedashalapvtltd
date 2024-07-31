import React, { useState } from "react";
import Modal from "react-modal";

const GuestAdmissionModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Guest admission form submitted:", formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Coach Admission Form"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2 className="text-2xl font-bold mb-6 ">Guest Admission Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="experience" className="font-medium mb-2">
            Experience
          </label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-medium mb-2">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-brandPrimary text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
      <button onClick={onRequestClose} className="mt-4 text-gray-500">
        Close
      </button>
    </Modal>
  );
};

export default GuestAdmissionModal;
