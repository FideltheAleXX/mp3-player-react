import styles from './Equalizer.module.css';
import { useRef, useEffect } from 'react';

const Equalizer = ({ analyser }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!analyser) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 2;

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

        gradient.addColorStop(0, '#0000ff');
        gradient.addColorStop(0.5, '#6666ff');
        gradient.addColorStop(1, '#e8ff66');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    };

    draw();
  }, [analyser]);

  return <canvas ref={canvasRef} width="300" height="100" />;
};

export default Equalizer;
