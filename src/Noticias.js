import React from "react";
import { connect } from "react-redux";
import { fetchNoticias } from "./actionCreator";

const FetchNoticia = ({ fetchNoticias }) => {
  return <button onClick={fetchNoticias}>Fetch Noticias</button>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNoticias() {
      dispatch(fetchNoticias());
    }
  };
};

export default connect(null, mapDispatchToProps)(FetchNoticia);
