import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  songs,
  song,
  id,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    // Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    // check if the song is playing
    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img className="library-song__cover" src={song.cover} alt={song.name} />
      <div className="library-song__description">
        <h3 className="library-song__name">{song.name}</h3>
        <h4 className="library-song__artist">{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
