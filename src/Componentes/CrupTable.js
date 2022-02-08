import React from "react";
import CrupTablaRow from "./CrupTablaRow";

const CrupTable = ({ dt, setDatoEdit, deleteData }) => {
  return (
    <div>
      <h3>tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>marca</th>
            <th>origen</th>
            <th>Accion.</th>
          </tr>
        </thead>
        <tbody>
          {dt.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            dt.map((el) => (
              <CrupTablaRow
                key={el.id}
                el={el}
                setDatoEdit={setDatoEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrupTable;
