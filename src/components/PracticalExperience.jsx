import React, { useState } from 'react';

const PracticalExperience = () => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [datesOfWork, setDatesOfWork] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the data
        setEditMode(false);
    };

    return (
        <div className="practical-experience">
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company"
                    />
                    <input
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder="Position"
                    />
                    <textarea
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                        placeholder="Responsibilities"
                    ></textarea>
                    <input
                        type="text"
                        value={datesOfWork}
                        onChange={(e) => setDatesOfWork(e.target.value)}
                        placeholder="Dates of Work"
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p>Company: {company}</p>
                    <p>Position: {position}</p>
                    <p>Responsibilities: {responsibilities}</p>
                    <p>Dates of Work: {datesOfWork}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default PracticalExperience;