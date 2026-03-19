import { useRef, useState, useEffect } from 'react';
import './App.css';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import Controls from './components/Controls/Controls';
import PlayList from './components/PlayList/PlayList';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Screen from './components/Screen/Screen';
import { songsArr } from '../public/data/songs';

function App() {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(songsArr);

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

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [currentTrackIndex, isPlaying]);

  return (
    <div className="container">
      {/* <Screen /> */}
      <div className="player">
        <audio
          preload="metadata"
          ref={audioRef}
          src={currentTrack.src}
          onEnded={handleNext}
        />
      </div>
      <ProgressBar />
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
