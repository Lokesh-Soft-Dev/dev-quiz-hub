import '../styles/Timer.css';

function Timer({ timeLeft }) {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (timeLeft / 15) * circumference;

    return (
        <div className="timer-container">
            <svg className="timer-svg" width="100" height="100">
                <circle
                    className="timer-bg"
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeWidth="8"
                />
                <circle
                    className="timer-progress"
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    transform="rotate(-90 50 50)"
                />
                <text
                    className="timer-text"
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dy=".3em"
                >
                    {timeLeft}s
                </text>
            </svg>
        </div>
    );
}

export default Timer;