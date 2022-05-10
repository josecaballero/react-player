import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player">
      <div className="player__timer">
        <p className="player__text">Start Time</p>
        <input className="player__range" type="range" />
        <p className="player__text">End Time</p>
      </div>

      <div className="player__controls">
        <FontAwesomeIcon size="2x" className="skip-back" icon={faAngleLeft} />
        <FontAwesomeIcon size="2x" className="play" icon={faPlay} />
        <FontAwesomeIcon
          size="2x"
          className="skip-forward"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
