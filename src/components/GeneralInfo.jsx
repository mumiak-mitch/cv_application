import React, { useState } from 'react';

const GeneralInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the data (you can define a function to handle this)
        setEditMode(false);
    };

    return (
        <div className="general-info">
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default GeneralInfo;