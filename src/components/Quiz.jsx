import { useState, useEffect } from 'react';
import { quizQuestions } from '../data/questions';
import Question from './Question';
import Timer from './Timer';
import '../styles/Quiz.css';

function Quiz({ finishQuiz, userName }) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
        setQuestions(shuffled.slice(0, 200));
    }, []);

    useEffect(() => {
        if (questions.length === 0 || quizCompleted) return;

        const timer = timeLeft > 0 && setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        if (timeLeft === 0) {
            handleNextQuestion();
        }

        return () => clearInterval(timer);
    }, [timeLeft, questions, quizCompleted]);

    const handleAnswer = (selectedOption) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(15);
        } else {
            setQuizCompleted(true);
            finishQuiz(score);
        }
    };

    const resetQuiz = () => {
        const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
        setQuestions(shuffled.slice(0, 200));
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimeLeft(15);
        setQuizCompleted(false);
    };

    const exitQuiz = () => {
        finishQuiz(score);
    };

    if (questions.length === 0) {
        return <div className="loading">Loading questions...</div>;
    }

    if (quizCompleted) {
        return null;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <h2>Welcome, {userName}!</h2>
                <div className="quiz-info">
                    <span>Question {currentQuestionIndex + 1}/{questions.length}</span>
                    <span>Score: {score}</span>
                </div>
            </div>

            <Timer timeLeft={timeLeft} />

            <Question
                question={currentQuestion}
                onAnswer={handleAnswer}
            />

            <div className="quiz-controls">
                <button onClick={resetQuiz} className="reset-button">
                    Reset Quiz
                </button>
                <button onClick={exitQuiz} className="exit-button">
                    Exit Quiz
                </button>
                <button onClick={handleNextQuestion} className="next-button">
                    Next Question
                </button>
            </div>
        </div>
    );
}

export default Quiz;