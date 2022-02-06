import React from "react";

const CrupTablaRow = ({el}) => {
    return (
    
        <tr>
            <td>{el.mark}</td>
            <td>{el.origin}</td>
            <td><button>Edit</button><button>ADD</button></td>
        </tr>
    );
};


export default CrupTablaRow;
