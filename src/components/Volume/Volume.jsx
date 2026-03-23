import styles from './Volume.module.css';

const Volume = ({ volume, onChange }) => {
  return (
    <div className={styles.volume}>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => {
          onChange(Number(e.target.value));
        }}
      />
    </div>
  );
};

export default Volume;
