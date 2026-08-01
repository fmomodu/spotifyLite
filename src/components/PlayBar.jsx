import { useState } from "react";
import "./PlayBar.css";

import {
  FaStepBackward,
  FaPlayCircle,
  FaPauseCircle,
  FaStepForward,
  FaHeart,
  FaMicrophone,
  FaListUl,
  FaDesktop,
  FaVolumeUp,
  FaExpand,
} from "react-icons/fa";

function PlayBar() {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <footer className="play-bar">
      <div className="song-info">
        <img src="" alt="Current song cover" />

        <div>
          <p>Song name</p>
          <h3>Artist Name</h3>
        </div>

        <button onClick={() => setLiked(!liked)}>
          <FaHeart color={liked ? "#1DB954" : "white"} />
        </button>
      </div>

      <div className="player-controls">
        <div className="control-buttons">
          <button>
            <FaStepBackward />
          </button>

          <button onClick={() => setPlaying(!playing)}>
            {playing ? <FaPauseCircle /> : <FaPlayCircle />}
          </button>

          <button>
            <FaStepForward />
          </button>
        </div>

        <div className="progress-container">
          <span>0:00</span>

          <div className="progress-bar"></div>

          <span>3:42</span>
        </div>
      </div>

      <div className="volume-controls">
        <button>
          <FaMicrophone />
        </button>

        <button>
          <FaListUl />
        </button>

        <button>
          <FaDesktop />
        </button>

        <button>
          <FaVolumeUp />
        </button>

        <button>
          <FaExpand />
        </button>
      </div>
    </footer>
  );
}

export default PlayBar;