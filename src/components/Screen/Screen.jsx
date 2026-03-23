import styles from './Screen.module.css';

const Screen = ({ currentTime, duration }) => {
  const formatTime = (time) => {
    if (!time) return '0:00';

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.screen}>
      <div>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
      <div className={styles.track}>Tracks name</div>

      {/* <h3>
        {currentTrack.title} — {currentTrack.artist}
      </h3> */}
      <div> Equalizer</div>
    </div>
  );
};

export default Screen;
