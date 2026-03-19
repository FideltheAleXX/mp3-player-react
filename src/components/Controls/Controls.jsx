import styles from './Controls.module.css';
import { HiPlay, HiPause, HiStop } from 'react-icons/hi2';
import { GiPreviousButton, GiNextButton } from 'react-icons/gi';

const Controls = ({ isPlaying, onToggle, onNext, onPrev, onStop }) => {
  return (
    <div className={styles.controls}>
      <button className={styles.btn} onClick={onPrev}>
        <GiPreviousButton />
      </button>
      <button className={styles.btn} onClick={onToggle}>
        {isPlaying ? <HiPause /> : <HiPlay />}
      </button>
      <button className={styles.btn} onClick={onStop}>
        <HiStop />
      </button>
      <button className={styles.btn} onClick={onNext}>
        <GiNextButton />
      </button>
    </div>
  );
};

export default Controls;
