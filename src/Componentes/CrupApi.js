import React, { useState, useEffect } from "react";
import CrupForm from "./CrupForm";
import CrupTable from "./CrupTable";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";

const CrupApi = () => {
  const [dt, setDt] = useState(null);
  const [datoEdit, setDatoEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/articulos";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      /*       console.log(res); */
      if (!res.err) {
        setDt(res);
        setError(null);
      } else {
        setDt(null);
        setError(res);
      }
      setLoading(false);
    });
  }, []);
  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      console.log(res); // el data que se envio por el metdod post
      console.log(data); // el dato local
      if (!res.err) {
        setDt([...dt, data]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    const editUrl = `${url}/${data.id}`;
    console.log(editUrl);
    api.put(editUrl, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = dt.map((el) => (el.id === res.id ? res : el));
        setDt(newData);
      } else {
        setError(res);
      }
    });
    //let newData = dt.map((el) => (el.id === data.id ? data : el));
    //setDt(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`seguro de eliminar '${id}'?`);
    let urlDelete = `${url}/${id}`;

    let options = {
      headers: { "content-type": "application/json" },
    };
    if (isDelete) {
      api.del(urlDelete, options).then((res) => {
        console.log(res);
        if (!res.err) {
          let newData = dt.filter((el) => el.id !== id);
          setDt(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>crup a una api falsa mediante json server</h2>
      <article className="templay-grid">
        <CrupForm
          createData={createData}
          updateData={updateData}
          datoEdit={datoEdit}
          setDatoEdit={setDatoEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#ff0000"
          />
        )}
        {dt && (
          <CrupTable
            dt={dt}
            setDatoEdit={setDatoEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrupApi;
