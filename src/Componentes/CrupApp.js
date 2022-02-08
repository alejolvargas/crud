import React, { useState } from "react";
import CrupForm from "./CrupForm";
import CrupTable from "./CrupTable";

const initDatos = [
  {
    id: 1,
    mark: "adidas",
    origin: "international",
  },
  {
    id: 2,
    mark: "nike",
    origin: "international",
  },
  {
    id: 3,
    mark: "totto",
    origin: "nacional",
  },
  {
    id: 4,
    mark: "rebbok",
    origin: "international",
  },
  {
    id: 5,
    mark: "croydon",
    origin: "national",
  },
];

const CrupApp = () => {
  const [dt, setDt] = useState(initDatos);
  const [datoEdit, setDatoEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDt([...dt, data]);
  };

  const updateData = (data) => {
    let newData = dt.map((el) => (el.id === data.id ? data : el));
    setDt(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`seguro de eliminar '${id}'?`);

    if (isDelete) {
      let newData = dt.filter((el) => el.id !== id);
      setDt(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>hola crup</h2>
      <secction className="templay-grid">
        <CrupForm
          createData={createData}
          updateData={updateData}
          datoEdit={datoEdit}
          setDatoEdit={setDatoEdit}
        />
        <CrupTable dt={dt} setDatoEdit={setDatoEdit} deleteData={deleteData} />
      </secction>
    </div>
  );
};

export default CrupApp;
