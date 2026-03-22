import styles from './ProgressBar.module.css';

const ProgressBar = ({ current, total, onChange }) => {
  return (
    <div className="progress-container">
      <input
        type="range"
        min="0"
        max={total || 0}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        step="0.1"
      />
    </div>
  );
};

export default ProgressBar;
