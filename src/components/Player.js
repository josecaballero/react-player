import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  // It allows us to grab something from the JSX
  const audioRef = useRef(null);

  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying((prevState) => !prevState);
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

  return (
    <div className="player">
      <div className="player__timer">
        <p className="player__text">{formatTime(songInfo.currentTime)}</p>
        <input className="player__range" type="range" />
        <p className="player__text">{formatTime(songInfo.duration)}</p>
      </div>

      <div className="player__controls">
        <FontAwesomeIcon size="2x" className="skip-back" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size="2x"
          className="play"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          size="2x"
          className="skip-forward"
          icon={faAngleRight}
        />
      </div>
      <audio
        onLoadedMetaData={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
