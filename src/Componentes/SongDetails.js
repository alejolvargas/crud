import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, bio, songLyric }) => {
  let { song, artist } = search;

  if (!bio && !songLyric) return null;
  return (
    <>
      {bio.artists ? (
        <SongArtist artist={artist} bio={bio} />
      ) : (
        <Message msg={`El artista: ${artist} no existe`} bgColor="#fbff00" />
      )}
      {songLyric.error || songLyric.err || songLyric.name === "AbortError" ? (
        <Message
          msg={`la letra de cancion: ${song} no existe`}
          bgColor="#fbff00"
        />
      ) : (
        <SongLyric title={song} songLyric={songLyric} />
      )}
    </>
  );
};

export default SongDetails;
