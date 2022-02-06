import React, {useState} from "react"
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
        id: 1,
        mark: "totto",
        origin: "nacional",
    },
    {
        id: 1,
        mark: "rebbok",
        origin: "imternational",
    },
    {
        id: 1,
        mark: "croydon",
        origin: "national",
    }
];

const CrupApp = () => {

    const [data, setData] = useState(initDatos);

    return(
        <div>
            <h2>hola crup</h2>
            <CrupForm />
            <CrupTable data={data} />
            
        </div>
    )
}

export default CrupApp;