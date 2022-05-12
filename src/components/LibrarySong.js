import React from "react";

const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    // Check if the song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
    audioRef.current.play();
  };

  return (
    <div onClick={songSelectHandler} className="library-song">
      <img className="library-song__cover" src={song.cover} alt={song.name} />
      <div className="library-song__description">
        <h3 className="library-song__name">{song.name}</h3>
        <h4 className="library-song__artist">{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
