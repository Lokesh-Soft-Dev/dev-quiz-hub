import { useState, useEffect } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Leaderboard from './components/Leaderboard';
import './styles/Home.css';

function App() {
    const [currentScreen, setCurrentScreen] = useState('home');
    const [userName, setUserName] = useState('');
    const [score, setScore] = useState(0);
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const storedLeaderboard = localStorage.getItem('quizLeaderboard');
        if (storedLeaderboard) {
            setLeaderboard(JSON.parse(storedLeaderboard));
        }
    }, []);

    const updateLeaderboard = (name, score) => {
        const newEntry = { name, score, date: new Date().toLocaleDateString() };
        const updatedLeaderboard = [...leaderboard, newEntry]
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);
        
        setLeaderboard(updatedLeaderboard);
        localStorage.setItem('quizLeaderboard', JSON.stringify(updatedLeaderboard));
    };

    const startQuiz = (name) => {
        setUserName(name);
        setCurrentScreen('quiz');
        setScore(0);
    };

    const finishQuiz = (finalScore) => {
        setScore(finalScore);
        updateLeaderboard(userName, finalScore);
        setCurrentScreen('results');
    };

    const resetQuiz = () => {
        setCurrentScreen('home');
    };

    return (
        <div className="app">
            {currentScreen === 'home' && <Home startQuiz={startQuiz} />}
            {currentScreen === 'quiz' && <Quiz finishQuiz={finishQuiz} userName={userName} />}
            {currentScreen === 'results' && (
                <Results score={score} userName={userName} resetQuiz={resetQuiz} />
            )}
            {currentScreen === 'leaderboard' && (
                <Leaderboard leaderboard={leaderboard} goHome={() => setCurrentScreen('home')} />
            )}
        </div>
    );
}

export default App;