import '../styles/Leaderboard.css';

function Leaderboard({ leaderboard, goHome }) {
    return (
        <div className="leaderboard-container">
            <h2>Quiz Leaderboard</h2>
            <p>Top 10 Performers</p>
            
            {leaderboard.length > 0 ? (
                <table className="leaderboard-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard.map((entry, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{entry.name}</td>
                                <td>{entry.score}/5</td>
                                <td>{entry.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="no-entries">No entries yet. Be the first to take the quiz!</p>
            )}
            
            <button onClick={goHome} className="home-button">
                Back to Home
            </button>
        </div>
    );
}

export default Leaderboard;