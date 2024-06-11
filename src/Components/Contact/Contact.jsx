import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_mq55k5p',    // Replace with your EmailJS service ID
      'template_88iu9jm',   // Replace with your EmailJS template ID
      formData,
      'cczwKduHk-mshju3M'        // Replace with your EmailJS user ID
    )
    .then((result) => {
        console.log('Success:', result);  // Log the result for debugging
      alert('Message sent successfully!');
      
      setFormData({ name: '', email: '',  message: '' });
    })
    .catch((error) => {
        console.error('Error:', error);  // Log the error for debugging
      alert('Failed to send message. Please try again later.');
      
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">Contact Me</h2>
      <form className="w-full md:w-2/3 lg:w-1/2 bg-gray-800 p-8 rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
