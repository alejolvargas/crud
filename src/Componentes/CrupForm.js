import React, { useState, useEffect } from "react";

const initForm = {
    id: null,
    origin: "",
    mark: ""
}

const CrupForm = () => {

    const [form, setFrom] = useState(initForm);

    const handlerChanger = (e) => { };

    const handlerSubmit = (e) => { };

    const handlerReset = (e) => { };

    return (
        <div>
            <h3>agregar</h3>
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
