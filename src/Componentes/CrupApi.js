import React, { useState } from "react";
import CrupForm from "./CrupForm";
import CrupTable from "./CrupTable";

const CrupApi = () => {
  const [dt, setDt] = useState([]);
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
      <h2>crup a una api falsa mediante json server</h2>
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

export default CrupApi;
