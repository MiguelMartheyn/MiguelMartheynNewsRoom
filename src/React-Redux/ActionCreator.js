export const ADD_NOTICIAS = "ADD_NOTICIAS";

export const fetchNoticias = (year, day, month) => {
  return (dispatch) => {
    fetch(`https://api.canillitapp.com/latest/${year}-${month}-${day}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addNoticias(response));
      });
  };
};

export const addNoticias = (noticias) => ({
  type: ADD_NOTICIAS,
  payload: { noticias }
});

export const ADD_TEXT = "ADD_TEXT";
export const changeText = (e) => ({
  type: ADD_TEXT,
  value: e.target.value
});

export const ADD_BUSCAR = "ADD_BUSCAR";

export const fetchBuscar = (text) => {
  return (dispatch) => {
    fetch(`https://api.canillitapp.com/search/:${text}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addBuscar(response));
      });
  };
};

export const fetchEnter = (e, text) => {
  e.persist();
  return (dispatch) => {
    fetch(`https://api.canillitapp.com/search/:${text}`)
      .then((response) => response.json())
      .then((response) => {
        if (e.charCode === 13) {
          dispatch(addBuscar(response));
        } else {
          return null;
        }
      });
  };
};

export const addBuscar = (noticias) => ({
  type: ADD_BUSCAR,
  payload: { noticias }
});

export const ADD_CATEGORIA = "ADD_CATEGORIA";
export const fetchCategoria = (numero) => {
  return (dispatch) => {
    fetch(`https://api.canillitapp.com/news/category/${numero}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addCategoria(response));
      });
  };
};

export const addCategoria = (noticias) => ({
  type: ADD_CATEGORIA,
  payload: { noticias }
});
