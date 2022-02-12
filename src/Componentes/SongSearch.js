import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [bio, setBio] = useState(null);
  const [songLyric, setSongLyric] = useState(null);
  const [loader, setLoader] = useState(false);

  const handlerSearch = (data) => {
    setSearch(data);
    console.log(search);
  };

  return (
    <div>
      <h2> Buscador De Canciones</h2>
      <SongForm handlerSearch={handlerSearch} />
      {loader && <Loader />}
      <SongDetails search={search} bio={bio} songLyric={songLyric} />
    </div>
  );
};

export default SongSearch;
