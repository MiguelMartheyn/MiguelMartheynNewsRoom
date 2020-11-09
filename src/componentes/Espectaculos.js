import React from "react";
import { connect } from "react-redux";
import { fetchCategoria } from "../React-Redux/ActionCreator";
import { addCategoria } from "../React-Redux/ActionCreator";
import cargando from "../images/cargando.gif";
import '../styles.css'

class Espectaculos extends React.Component {
  componentDidMount() {
    this.props.fetchCategoria(4);
  }
  render() {
    const { noticiasCategoria } = this.props;

    let espectaculos = noticiasCategoria.filter(
      (filter) => filter.category === "Espectáculos" && filter.img_url !== null
    );
    const espectaculosList = espectaculos.slice(0, 10);
    return (
      <>
        <h1>Espectáculos</h1>
        <div className="news">
          {espectaculosList ? (
            <ul>
              {espectaculosList.map((quotes) => (
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
                        alt={quotes.img_url}
                      />
                    </div>
                    <div className="new-name">
                      <h1>{quotes.source_name}</h1>
                    </div>
                    <div className="new-title">{quotes.title}</div>
                  </div>
                </a>
              ))}
              {espectaculos.length > 0 ? (
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
    noticiasCategoria: state.noticias.noticiasCategoria
  };
  return estadoAPropiedades;
};

const mapDispatchToProps = {
  fetchCategoria: fetchCategoria,
  addCategoria: addCategoria
};

export default connect(mapStateToProps, mapDispatchToProps)(Espectaculos);
