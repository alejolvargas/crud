import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, bio, songLyric }) => {
  if (!bio && !songLyric) return null;
  return (
    <>
      {songLyric.error || songLyric.err || songLyric.name === "AbortError" ? (
        <Message
          msg={`la letra de cancion: ${search.song} no existe`}
          bgColor="#fbff00"
        />
      ) : (
        <SongLyric />
      )}
      {bio.artists ? (
        <SongArtist />
      ) : (
        <Message
          msg={`El artista: ${search.artist} no existe`}
          bgColor="#fbff00"
        />
      )}
    </>
  );
};

export default SongDetails;
