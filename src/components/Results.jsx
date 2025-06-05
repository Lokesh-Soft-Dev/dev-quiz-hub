import { useEffect } from 'react';
import '../styles/Results.css';

function Results({ score, userName, resetQuiz }) {
    const totalQuestions = 200;
    const percentage = (score / totalQuestions) * 100;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getResultMessage = () => {
        if (percentage >= 80) return "Excellent! You're a quiz master!";
        if (percentage >= 60) return "Good job! You know your stuff!";
        if (percentage >= 40) return "Not bad! Keep learning!";
        return "Keep practicing! You'll get better!";
    };

    return (
        <div className="results-container">
            <h2>Quiz Results</h2>
            <p className="user-greeting">Well done, {userName}!</p>
            
            <div className="score-circle">
                <div className="score-percentage">{percentage}%</div>
                <div className="score-detail">
                    {score} out of {totalQuestions} correct
                </div>
            </div>
            
            <p className="result-message">{getResultMessage()}</p>
            
            <div className="action-buttons">
                <button onClick={resetQuiz} className="retry-button">
                    Try Again
                </button>
            </div>
        </div>
    );
}

export default Results;