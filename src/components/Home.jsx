import { useState } from 'react';
import '../styles/Home.css';

function Home({ startQuiz }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            startQuiz(name);
        }
    };

    return (
        <div className="home-container">
            <h1>Welcome to the Quiz App</h1>
            <p>Test your knowledge with our quiz!</p>
            
            <form onSubmit={handleSubmit} className="quiz-form">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                />
                <button type="submit">Start Quiz</button>
            </form>
            
            <div className="quiz-info">
                <h2>Quiz Features:</h2>
                <ul>
                    <li>Multiple Choice Questions</li>
                    <li>Timer for each question</li>
                    <li>Randomized questions</li>
                    <li>Score tracking</li>
                    <li>Leaderboard</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;