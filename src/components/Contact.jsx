// ContactForm.js
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        source: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className=" con flex items-center  justify-center min-h-screen ">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-1/3">
            <h2 className="text-sm  mb-6  text-blue-600  text-center">#CONTACT US</h2>
                <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
                <p className="text-sm  mb-3 p-4 text-center">Enim tempor eget pharetra facilisis sed maecenas adipising.Eu leop molesties vel,ornare non id blandit netus.</p>
                <div className="mb-4 p-4">
                    
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                               placeholder=" Name *"
                        className="mt-1  border border-gray-300 rounded w-full"
                    />
                </div>
                <div className="mb-4 p-4">
                    
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                         placeholder="  Email "
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <div className="mb-4 p-4">
                   
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                         placeholder="  Phone Number *"
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <div className="mb-4 p-4">
                    
                    <select
                        id="source"
                        name="source"
                        required
                        value={formData.source}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    >
                        <option value="" disabled>How did you find us?</option>
                        <option value="search engine">Search Engine</option>
                        <option value="social media">Social Media</option>
                        <option value="friend or family">Friend or Family</option>
                        <option value="advertisement">Advertisement</option>
                         <option value="other">Other</option>
                    </select>
                </div>


                <div className="mb-4 p-4">
            <button className="mt-1 p-2 border bg-cyan-600 text-black rounded w-full hover:bg-cyan-700">
                SEND
            </button>
        </div>

            
            </form>
        </div>
    );
};

export default Contact;
