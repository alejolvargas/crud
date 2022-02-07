import React, { useState } from "react";
import CrupForm from "./CrupForm";
import CrupTable from "./CrupTable";

const initDatos = [
    {
        id: 1,
        mark: "adidas",
        origin: "imternational",
    },
    {
        id: 2,
        mark: "nike",
        origin: "imternational",
    },
    {
        id: 3,
        mark: "totto",
        origin: "nacional",
    },
    {
        id: 4,
        mark: "rebbok",
        origin: "imternational",
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
        setDt([
            ...dt,
            data
        ])
    };

    const updateData = (data) => { };

    const deleteData = (id) => { };

    return (
        <div>
            <h2>hola crup</h2>
            <CrupForm
                createData={createData}
                updateData={updateData}
                datoEdit={datoEdit}
                setDatoEdit={setDatoEdit}
            />
            <CrupTable dt={dt}
                setDatoEdit={setDatoEdit}
                deleteData={deleteData}
            />
        </div>
    );
};

export default CrupApp;
