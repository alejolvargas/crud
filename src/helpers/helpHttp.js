export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json", // se agregan las cabeceras necesarios//
    };

    const controller = new AbortController();
    options.signal = controller.signal; //controla la rspuesta del servidor

    options.method = options.method || "GET"; // metodo por el cual se va haacer la peticion
    options.header = options.header // cuando el usuario indica cabeceras
      ? { ...defaultHeader, ...options.header }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false; // agrega el body al metodo que lo require
    if (!options.body) delete options.body;

    console.log(options);

    setTimeout(() => {
      controller.abort();
    }, 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "error en peticion",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
