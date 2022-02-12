import React from "react";

const SongArtist = ({ artist, bio }) => {
  let { artists } = bio;
  return (
    <div>
      <h2>{artist}</h2>
      <p>{artists[0].idArtist}</p>
    </div>
  );
};

export default SongArtist;
