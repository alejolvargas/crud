import React, { useState, useEffect } from "react";

const initForm = {
  id: null,
  mark: "",
  origin: "",
};

const CrupForm = ({ createData, updateData, datoEdit, setDatoEdit }) => {
  const [form, setFrom] = useState(initForm);

  useEffect(() => {
    if (datoEdit) {
      setFrom(datoEdit);
    } else {
      setFrom(initForm);
    }
  }, [datoEdit]);

  const handlerChanger = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!form.mark || !form.origin) {
      alert("FALTAN DATOS POR LLENAR");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handlerReset();
  };

  const handlerReset = (e) => {
    setFrom(initForm);
    setDatoEdit(null);
  };

  return (
    <div>
      <h3>{datoEdit ? "editar" : "agregar"}</h3>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="mark"
          placeholder="marca"
          onChange={handlerChanger}
          value={form.mark}
        />
        <input
          type="text"
          name="origin"
          placeholder="origen"
          onChange={handlerChanger}
          value={form.origin}
        />
        <input type="submit" value="Enviar" />
        <input type="Reset" value="Limpiar" onClick={handlerReset} />
      </form>
    </div>
  );
};

export default CrupForm;
