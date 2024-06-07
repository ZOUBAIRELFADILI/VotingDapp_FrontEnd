import React from 'react';

const CandidateList = ({ candidates, voteForCandidate, isOwner, deleteCandidate, electionEnded }) => (
    <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Candidates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {candidates.map((candidate, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                    <p className="font-semibold">Name: {candidate.name}</p>
                    <img src={`https://gateway.pinata.cloud/ipfs/${candidate.ipfsHash}`} alt={candidate.name} className="w-32 h-32 object-cover mt-2" />
                    <p className="mt-2">Survey: <a href={candidate.surveyLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">{candidate.surveyLink}</a></p>
                    {!electionEnded && <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded" onClick={() => voteForCandidate(index)}>Vote</button>}
                    {electionEnded && <p className="mt-2">Votes: {candidate.voteCount}</p>}
                    {isOwner && !electionEnded && <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded" onClick={() => deleteCandidate(index)}>Delete</button>}
                </div>
            ))}
        </div>
    </div>
);

export default CandidateList;
