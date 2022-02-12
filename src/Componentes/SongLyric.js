import React from "react";

const SongLyric = ({ title, songLyric }) => {
  let { lyrics } = songLyric;

  return (
    <div>
      <h2>{title}</h2>
      <h3>letra</h3>
      <p style={{ whiteSpace: "pre-wrap" }}>{lyrics}</p>
    </div>
  );
};

export default SongLyric;
