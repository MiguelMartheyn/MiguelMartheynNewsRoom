import { combineReducers } from "redux";
import {
  ADD_NOTICIAS,
  ADD_BUSCAR,
  ADD_TEXT,
  ADD_CATEGORIA
} from "./ActionCreator";

const initialState = {
  noticias: [],
  text: "",
  noticiasBuscar: [],
  noticiasCategoria: [],
  buscarResultado: ""
};

const noticias = (noticias = initialState, action) => {
  if (action.type === ADD_NOTICIAS) {
    return {
      noticias: action.payload.noticias,
      text: "",
      noticiasBuscar: noticias.noticiasBuscar,
      noticiasCategoria: [],
      buscarResultado: noticias.buscarResultado
    };
  }
  if (action.type === ADD_TEXT) {
    return {
      noticias: noticias.noticias,
      text: action.value,
      noticiasBuscar: noticias.noticiasBuscar,
      noticiasCategoria: [],
      buscarResultado: ""
    };
  }
  if (action.type === ADD_BUSCAR) {
    return {
      noticias: noticias.noticias,
      text: "",
      noticiasBuscar: action.payload.noticias,
      noticiasCategoria: [],
      buscarResultado: noticias.text
    };
  }

  if (action.type === ADD_CATEGORIA) {
    return {
      noticias: noticias.noticias,
      text: "",
      noticiasBuscar: noticias.noticiasBuscar,
      noticiasCategoria: action.payload.noticias,
      buscarResultado: noticias.buscarResultado
    };
  }
  return noticias;
};

export default combineReducers({
  noticias
});
