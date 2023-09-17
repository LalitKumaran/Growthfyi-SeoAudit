import "../styles/progressbar_styles.css";

export function ProgressBar({ progress }) {
    return (
      <div className="progress-container">
        <svg className="progress-ring" width="100" height="100">
          <circle
            className="progress-circle"
            r="40"
            cx="50"
            cy="50"
            fill="transparent"
            strokeDasharray="251.2"
            strokeDashoffset={(251.2 * (100 - progress)) / 100}
          />
        </svg>
        <div className="progress-text">{progress}%</div>
      </div>
    );
  }
  