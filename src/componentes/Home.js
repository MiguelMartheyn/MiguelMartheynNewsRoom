import React from "react";
import { connect } from "react-redux";
import { fetchNoticias } from "../React-Redux/ActionCreator";
import { addNoticias } from "../React-Redux/ActionCreator";
import cargando from "../images/cargando.gif";
import moment from "moment";
import "moment/locale/es";
import '../styles.css'

const today = new Date();
const year = parseInt(moment(today).format("YYYY"), 10);
const day = parseInt(moment(today).format("DD"), 10);
const month = parseInt(moment(today).format("MM"), 10);

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchNoticias(year, day, month);
  }

  render() {
    const { noticias } = this.props;
    let home = noticias.filter((filter) => filter.img_url !== null);
    const homeList = home.slice(0, 10);

    return (
      <>
        <h1>Noticias populares</h1>
        <div className="news">
          {homeList ? (
            <ul>
              {homeList.map((quotes) => (
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
              {homeList.length > 0 ? (
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
    noticias: state.noticias.noticias
  };
  return estadoAPropiedades;
};

const mapDispatchToProps = {
  addNoticias: addNoticias,
  fetchNoticias: fetchNoticias
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
