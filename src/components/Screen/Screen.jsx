import Equalizer from '../Equalizer/Equalizer';
import styles from './Screen.module.css';

const Screen = ({
  currentTime,
  duration,
  coverArt,
  trackName,
  artistName,
  analyser,
}) => {
  const formatTime = (time) => {
    if (!time) return '0:00';

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.screen}>
      <img src={coverArt} alt="cover" className={styles.cover} />
      <div>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
      <div className={styles.track}>
        {artistName} - {trackName}
      </div>
      <div>
        <Equalizer analyser={analyser} />
      </div>
    </div>
  );
};

export default Screen;
