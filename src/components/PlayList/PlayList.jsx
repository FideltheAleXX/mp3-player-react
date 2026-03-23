import styles from './PlayList.module.css';

const PlayList = ({ songs, currentTrackIndex, onTrackSelect }) => {
  return (
    <ul className={styles.playlist}>
      {songs.map((song, index) => (
        <li
          key={song.id}
          className={index === currentTrackIndex ? styles.active : ''}
          onClick={() => onTrackSelect(index)}
        >
          <span>{song.artist}</span> - {song.title}
        </li>
      ))}
    </ul>
  );
};

export default PlayList;
