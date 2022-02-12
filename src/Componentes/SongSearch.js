import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [bio, setBio] = useState(null);
  const [songLyric, setSongLyric] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const FetchData = async () => {
      const { artist, song } = search;

      let urlArtist = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let urlSong = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoader(true);

      const [resArtist, resSong] = await Promise.all([
        helpHttp().get(urlArtist),
        helpHttp().get(urlSong),
      ]);

      console.log(resArtist, resSong);
      setBio(resArtist);
      setSongLyric(resSong);
      setLoader(false);
    };

    FetchData();
  }, [search]);

  const handlerSearch = (data) => {
    setSearch(data);
    console.log(search);
  };

  return (
    <div>
      <h2> Buscador De Canciones</h2>
      <SongForm handlerSearch={handlerSearch} />
      {loader && <Loader />}

      {search && !loader && (
        <SongDetails search={search} bio={bio} songLyric={songLyric} />
      )}
    </div>
  );
};

export default SongSearch;
