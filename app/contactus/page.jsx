'use client'
import React, { useState } from "react";

const ContactUs = () => {
  const data = { name: "", email: "", message: "" };
  const [complain, setComplain] = useState(data);

  const handleData = (e) => {
    setComplain({ ...complain, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!complain.name || !complain.email || !complain.message) {
      alert("All fields are not filled properly");
    } else {
      console.log("Form submitted:", complain);
    }
  };
  var gmail = "onlinebooking@gmail.com";

  return (
    <>
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg">
                We're here to assist you. Feel free to reach out to us using the information below or by filling out the contact form.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
              <h4 className="text-xl font-bold">Contact Form</h4>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                  <label htmlFor="name" className="block mb-1">Your Name</label>
                  <input type="text" id="name" name="name" value={complain.name} onChange={handleData} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="block mb-1">Your Email</label>
                  <input type="email" id="email" name="email" value={complain.email} onChange={handleData} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="block mb-1">Your Message</label>
                  <textarea id="message" name="message" rows="4" value={complain.message} onChange={handleData} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Submit</button>
              </form>
            </div>
            <div>
              <div className="mb-8">
                <h4 className="text-xl font-bold">Contact Information</h4>
                <p>
                  <strong>Email:</strong> {gmail}
                </p>
                <p>
                  <strong>Phone:</strong> +1 (123) 456-7890
                </p>
                <p>
                  <strong>Address:</strong> 123 Main Street, Cityville, State, Country
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold">Your Email is being ready</h4>
                <p>To: {gmail}</p>
                <p>From: {complain.email}</p>
                <p><br/>Dear Admin,</p>
                <p>I would like to inform you about the problem that,</p>
                <p>{complain.message}<br/></p>
                <p>Sincerly Yours,</p>
                <p>{complain.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
