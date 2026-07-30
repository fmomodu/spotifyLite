import "./PlayBar.css";

import {
  FaStepBackward,
  FaPlayCircle,
  FaStepForward,
  FaHeart,
  FaMicrophone,
  FaListUl,
  FaDesktop,
  FaVolumeUp,
  FaExpand,
} from "react-icons/fa";
function PlayBar() {
    return (
   <footer className="play-bar">

    <div className="song-info">
        <img src="" alt="Current song cover" />

        <div>

        <p>Song name</p>

        <h3>Artist Name</h3>

    </div>

    <button>

        <FaHeart />

    </button>

       

        

      
        
    </div>

    <div className="player-controls">
        <div className="control-buttons">

        <button><FaStepBackward /></button>

        <button><FaPlayCircle /></button>

        <button><FaStepForward /></button>

    </div>

    <div className="progress-container">

        <span>0:00</span>


        <div className="progress-bar"></div>

        <span>3:42</span>
    </div>
    </div>

    <div className="volume-controls">
        <button><FaMicrophone /></button>

    <button><FaListUl /></button>

    <button><FaDesktop /></button>

    <button><FaVolumeUp /></button>

    <button><FaExpand /></button>

    </div>
    </footer>
    );
   
}
export default PlayBar;