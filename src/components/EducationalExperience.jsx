import React, { useState } from 'react';

const EducationalExperience = () => {
    const [school, setSchool] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [dateOfStudy, setDateOfStudy] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the data
        setEditMode(false);
    };

    return (
        <div className="educational-experience">
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        placeholder="School"
                    />
                    <input
                        type="text"
                        value={studyTitle}
                        onChange={(e) => setStudyTitle(e.target.value)}
                        placeholder="Study Title"
                    />
                    <input
                        type="text"
                        value={dateOfStudy}
                        onChange={(e) => setDateOfStudy(e.target.value)}
                        placeholder="Date of Study"
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p>School: {school}</p>
                    <p>Study Title: {studyTitle}</p>
                    <p>Date of Study: {dateOfStudy}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default EducationalExperience;
