import React from 'react';

const VotingControls = ({ startElection, endElection, electionStarted, electionEnded }) => (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded mr-4" onClick={startElection} disabled={electionStarted}>Start Election</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={endElection} disabled={!electionStarted || electionEnded}>End Election</button>
    </div>
);

export default VotingControls;
