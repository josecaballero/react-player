import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song">
      <img className="song__cover" src={currentSong.cover} alt="Album cover" />
      <h2 className="song__name">{currentSong.name}</h2>
      <h3 className="song__artist">{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
