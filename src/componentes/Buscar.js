import React from "react";
import { connect } from "react-redux";
import { fetchBuscar, fetchEnter } from "../React-Redux/ActionCreator";
import { changeText } from "../React-Redux/ActionCreator";
import cargando from "../images/cargando.gif";
import '../styles.css'

class Buscar extends React.Component {
  render() {
    const {
      fetchBuscar,
      changeText,
      noticiasBuscar,
      text,
      fetchEnter,
      buscarResultado
    } = this.props;
    let buscar = noticiasBuscar.filter((filter) => filter.img_url !== null);
    const buscarList = buscar.slice(0, 10);

    return (
      <>
        {buscarList.length > 0 ? (
          <h1>Resultado Busqueda : {buscarResultado}</h1>
        ) : (
          <h1>Haga alguna busqueda</h1>
        )}
        <div className="main-input">
          <div className="main-input-container">
            <span className="search-icon"></span>
            <input
              type="text"
              value={text}
              onChange={changeText}
              onKeyPress={(e) => fetchEnter(e, text)}
            />
          </div>
        </div>
        <div className="main-buttons">
          <div>
            <button onClick={() => fetchBuscar(text)}>BUSCAR</button>
          </div>
        </div>
        <div className="news">
          {buscarList ? (
            <ul>
              {buscarList.map((quotes) => (
                <a
                  key={quotes.news_id}
                  href={quotes.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="new">
                    <div className="image">
                      <img
                        className="new-image"
                        src={quotes.img_url}
                        alt="No fue posible cargar la Imagen"
                      />
                    </div>
                    <div className="new-name">
                      <h1>{quotes.source_name}</h1>
                    </div>
                    <div className="new-title">{quotes.title}</div>
                  </div>
                </a>
              ))}
              {buscarList.length > 0 ? (
                <p></p>
              ) : (
                <img className="new-image" src={cargando} alt={cargando} />
              )}
            </ul>
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const estadoAPropiedades = {
    text: state.noticias.text,
    noticiasBuscar: state.noticias.noticiasBuscar,
    buscarResultado: state.noticias.buscarResultado
  };
  return estadoAPropiedades;
};

const mapDispatchToProps = {
  changeText: changeText,
  fetchBuscar: fetchBuscar,
  fetchEnter: fetchEnter
};

export default connect(mapStateToProps, mapDispatchToProps)(Buscar);
