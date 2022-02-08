import React from "react";

const CrupTablaRow = ({ el, setDatoEdit, deleteData }) => {
  let { mark, origin, id } = el;
  return (
    <tr>
      <td>{mark}</td>
      <td>{origin}</td>
      <td>
        <button onClick={() => setDatoEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>ADD</button>
      </td>
    </tr>
  );
};

export default CrupTablaRow;
