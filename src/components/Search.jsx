import React from "react";

import classNames from "classnames";

import { getVideoSearch } from "../actions";
import { connect } from "react-redux";

import "../styles/components/Search.scss";

const Search = ({ isHome, getVideoSearch }) => {
  const inputStyle = classNames("input", { isHome });

  const handleInput = (event) => {
    getVideoSearch(event.target.value); //el valor de lo que se esta escribiendo
  };

  return (
    <section className="main_home">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        onKeyUp={handleInput}
        placeholder="Buscar..."
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  //envia el state a la STORE---- //EL PAYLOAD
  return {
    searchResult: state.searchResult,
  };
};

const mapDispatchToProps = {
  //la accion a usar
  getVideoSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
