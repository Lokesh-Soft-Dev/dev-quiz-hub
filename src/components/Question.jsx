import '../styles/Question.css';

function Question({ question, onAnswer }) {
    if (!question) return null;

    return (
        <div className="question-container">
            <h3 className="question-text">{question.question}</h3>
            <div className="options-container">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className="option-button"
                        onClick={() => onAnswer(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <p className="question-category">Category: {question.category}</p>
        </div>
    );
}

export default Question;