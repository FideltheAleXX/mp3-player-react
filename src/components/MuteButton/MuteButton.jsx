import styles from './MuteButton.module.css';
import { ImVolumeMute, ImVolumeMute2 } from 'react-icons/im';

const MuteButton = ({ isMuted, onToggle }) => {
  return (
    <div className={styles.muteButtonContainer}>
      <button onClick={onToggle}>
        {isMuted ? <ImVolumeMute2 /> : <ImVolumeMute />}
      </button>
    </div>
  );
};

export default MuteButton;
