import React, { useState } from "react";

const initForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handlerSearch }) => {
  const [form, setForm] = useState(initForm);

  const handleChanger = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("faltan datos");
      return;
    }
    handlerSearch(form);
    setForm(initForm);
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="nombre del artista"
          onChange={handleChanger}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="nombre de la cancion"
          onChange={handleChanger}
          value={form.song}
        />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};
// controlar el formulario con una variable de estado
export default SongForm;
