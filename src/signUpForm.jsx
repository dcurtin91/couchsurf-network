import React, { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendMessage } from './firebase';



function SignUpForm() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        roomsAvailable: false,
        numberOfRooms: ''
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
        sendMessage(user, formData.name, formData.email, formData.roomsAvailable, formData.numberOfRooms);
        setFormData({
            name: '',
            email: '',
            roomsAvailable: false,
            numberOfRooms: ''
        });
        navigate('/dashboard');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="message-input-container">
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="message-input"
                    required
                    minLength={1}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="message-input"
                    required
                    minLength={1}
                />
                <label>
                    <input
                        type="checkbox"
                        name="roomsAvailable"
                        checked={formData.roomsAvailable}
                        onChange={handleChange}
                        placeholder="rooms available"
                    />
                    Rooms Available
                </label>
                {formData.roomsAvailable && (
                    <input
                        type="number"
                        name="numberOfRooms"
                        placeholder="1"
                        value={formData.numberOfRooms}
                        onChange={handleChange}
                        className="message-input"

                    />
                )}
                <button type="submit" disabled={formData.name < 1} className="send-message">
                    Submit
                </button>

            </form>
        </div>
    );
}

export { SignUpForm };
