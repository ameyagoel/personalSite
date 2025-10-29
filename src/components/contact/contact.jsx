import React, { useState } from 'react'
import { Col, Container } from 'react-grid-system'
import './contact.css'
import { Row } from 'react-grid-system'
import cup from '../../assets/coffeecup.svg'


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("☕ Message sent! Thanks for stopping by the café!");
    setFormData({ name: '', email: '', message: '' });
  };



    return (
        <div className='contact'>
            <div className='contact-header'>
                <img className="contact-cup" src={cup} alt="cup" />
                <h2>Contact Me</h2>
            </div>
            <div className='inputs'>
                <form onSubmit={handleSubmit}>
                    <label>Your Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Message</label>
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button  className="submitBtn" type="submit">Send Message</button>
                </form>

            </div>


        </div>

    )
}

