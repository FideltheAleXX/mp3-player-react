import { useRef, useState, useEffect } from 'react';
import './App.css';
import Controls from './components/Controls/Controls';
import PlayList from './components/PlayList/PlayList';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Screen from './components/Screen/Screen';
import Volume from './components/Volume/Volume';
import MuteButton from './components/MuteButton/MuteButton';
import { songsArr } from '../public/data/songs';

function App() {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(songsArr);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [lastVolume, setLastVolume] = useState(1);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % songs.length);
  };

  const handleStop = () => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  const currentTrack = songs[currentTrackIndex];

  const onTrackSelect = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const handleProgressChange = (value) => {
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    audioRef.current.volume = value;
  };

  const toggleMute = () => {
    const audio = audioRef.current;

    if (audio.muted) {
      audio.muted = false;
      audio.volume = lastVolume;
    } else {
      setLastVolume(audio.volume);
      audio.muted = true;
    }

    setIsMuted(audio.muted);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [currentTrackIndex, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="container">
      <div className="player">
        <audio
          preload="metadata"
          ref={audioRef}
          src={currentTrack.src}
          onEnded={handleNext}
          onLoadedMetadata={(e) => setDuration(e.target.duration)}
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        />
      </div>
      <Screen currentTime={currentTime} duration={duration} />
      <Volume volume={volume} onChange={handleVolumeChange} />
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />

      <ProgressBar
        current={currentTime}
        total={duration}
        onChange={handleProgressChange}
      />

      <Controls
        isPlaying={isPlaying}
        onToggle={togglePlay}
        onNext={handleNext}
        onPrev={handlePrev}
        onStop={handleStop}
      />

      <PlayList
        songs={songs}
        currentTrackIndex={currentTrackIndex}
        onTrackSelect={onTrackSelect}
      />
    </div>
  );
}

export default App;
