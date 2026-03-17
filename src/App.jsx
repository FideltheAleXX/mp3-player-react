import './App.css';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import Controls from './components/Controls/Controls';
import PlayList from './components/PlayList/PlayList';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Screen from './components/Screen/Screen';

function App() {
  return (
    <div className="container">
      <Screen />
      <AudioPlayer />
      <ProgressBar />
      <Controls />
      <PlayList />
    </div>
  );
}

export default App;
