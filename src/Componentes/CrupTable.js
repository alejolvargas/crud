import React from "react";
import CrupTablaRow from "../CrupTablaRow";

const CrupTable = ({data}) => {
    return(
        <div>
            <h3>tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>marca</th>
                        <th>origen</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                  {data.length === 0 ? (
                      <tr>
                        <td colSpan="3">Sin datos</td>
                      </tr>) : (
                        data.map((el) => <CrupTablaRow key={el.id} el={el} />)
                      )}
                </tbody>
            </table>
        </div>
    )
}

export default CrupTable;