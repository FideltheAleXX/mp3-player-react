import styles from './Controls.module.css';
import {
  HiPlay,
  HiPause,
  HiStop,
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from 'react-icons/hi2';

const Controls = () => {
  return (
    <>
      <div className={styles.container}>
        <button>
          <HiOutlineChevronDoubleLeft />
        </button>
        <button>
          <HiPlay />
        </button>
        <button>
          <HiPause />
        </button>
        <button>
          <HiStop />
        </button>
        <button>
          <HiOutlineChevronDoubleRight />
        </button>
      </div>
    </>
  );
};

export default Controls;
