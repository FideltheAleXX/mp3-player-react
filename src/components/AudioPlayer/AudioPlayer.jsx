import styles from './AudioPlayer.module.css';

const AudioPlayer = ({ currentTrack, isPlaying, audioRef, onEnded }) => {
  return (
    <div className={styles.player}>
      <audio
        preload="metadata"
        ref={audioRef}
        src={currentTrack.src}
        onEnded={onEnded}
      />
    </div>
  );
};

export default AudioPlayer;
