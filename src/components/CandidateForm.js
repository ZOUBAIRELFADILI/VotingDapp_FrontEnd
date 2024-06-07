import React, { useState } from 'react';

const CandidateForm = ({ submitCandidate }) => {
    const [newCandidateName, setNewCandidateName] = useState("");
    const [newCandidateSurveyLink, setNewCandidateSurveyLink] = useState("");
    const [fileUrl, setFileUrl] = useState(null);

    const handleSubmit = () => {
        if (newCandidateName && newCandidateSurveyLink && fileUrl) {
            submitCandidate(newCandidateName, newCandidateSurveyLink, fileUrl);
            setNewCandidateName("");
            setNewCandidateSurveyLink("");
            setFileUrl(null);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Add a New Candidate</h3>
            <input
                type="text"
                placeholder="Candidate Name"
                value={newCandidateName}
                onChange={(e) => setNewCandidateName(e.target.value)}
                className="border p-2 w-full mb-4"
            />
            <input
                type="text"
                placeholder="Survey Link"
                value={newCandidateSurveyLink}
                onChange={(e) => setNewCandidateSurveyLink(e.target.value)}
                className="border p-2 w-full mb-4"
            />
            <input
                type="file"
                onChange={(e) => setFileUrl(e.target.files[0])}
                className="border p-2 w-full mb-4"
            />
            {fileUrl && <img src={URL.createObjectURL(fileUrl)} alt="Candidate" className="w-32 h-32 object-cover mb-4" />}
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit Candidate</button>
        </div>
    );
};

export default CandidateForm;
