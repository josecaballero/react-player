import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song">
      <img
        className={`song__cover ${isPlaying ? "spin" : ""} `}
        src={currentSong.cover}
        alt={currentSong.name}
      />
      <h2 className="song__name">{currentSong.name}</h2>
      <h3 className="song__artist">{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
