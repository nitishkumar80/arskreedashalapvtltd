import React, { useState } from 'react';

const AdmissionForm = ({ role }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">
        Admission Form for {role}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-medium mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Role-specific fields */}
        {role === 'Coach' && (
          <div className="flex flex-col">
            <label htmlFor="experience" className="font-medium mb-2">Coaching Experience (in years)</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
        )}

        {/* You can add more role-specific fields as needed */}

        <div className="flex flex-col">
          <label htmlFor="message" className="font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="bg-brandPrimary text-white py-2 px-4 rounded hover:bg-brandPrimaryDark"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
