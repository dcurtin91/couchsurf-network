import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendMessage } from './firebase';



function SignUpForm() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [formData, setFormData] = useState({
        address: '',
        name: '',
        email: '',
        phone: '',
        vacancy: false,
        availability: ''
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(user, formData.address, formData.name, formData.email, formData.phone, formData.vacancy, formData.availability);
        setFormData({
            address: '',
            name: '',
            email: '',
            phone: '',
            vacancy: false,
            availability: ''
        });
        navigate('/dashboard');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="message-input-container">
            <input
                    type="text"
                    name="address"
                    placeholder="property address"
                    value={formData.address}
                    onChange={handleChange}
                    className="message-input"
                    required
                    minLength={1}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="contact first and last name"
                    value={formData.name}
                    onChange={handleChange}
                    className="message-input"
                    required
                    minLength={1}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="contact email"
                    value={formData.email}
                    onChange={handleChange}
                    className="message-input"
                    required
                    minLength={1}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="contact phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="message-input"
                    
                    minLength={1}
                />
                <label>
                    <input
                        type="checkbox"
                        name="vacancy"
                        checked={formData.vacancy}
                        onChange={handleChange}
                        placeholder="number of rooms available"
                    />
                    Vacant Rooms?
                </label>
                {formData.vacancy && (
                    
                    <input
                        type="number"
                        name="availability"
                        placeholder="1"
                        value={formData.availability}
                        onChange={handleChange}
                        className="message-input"
                        min={0}
                        max={10}

                    />
                ) }
                <button type="submit" disabled={formData.name < 1} className="send-message">
                    Submit
                </button>

            </form>
        </div>
    );
}

export { SignUpForm };
