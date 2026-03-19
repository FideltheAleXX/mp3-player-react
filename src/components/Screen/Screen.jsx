import styles from './Screen.module.css';
const Screen = () => {
  return (
    <>
      <div className={styles.track}>Tracks name</div>
      <h3>
        {currentTrack.title} — {currentTrack.artist}
      </h3>
      <div> Equalizer</div>
    </>
  );
};

export default Screen;
