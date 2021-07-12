import React from "react";

//conenctar nuestra App
import { connect } from "react-redux";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carrusell from "../components/Carrusell";
import CarrusellItem from "../components/CarrusellItem";

import "../styles/Home.scss";

const Home = ({ myList, trends, originals, searchResult }) => {
  //viene desde store

  return (
    <React.Fragment>
      <Header />
      <Search isHome />

      {searchResult.length > 0 && (
        <Categories title="Resultados de la busqueda...">
          <Carrusell>
            {searchResult.map((item) => (
              <CarrusellItem key={item.id} {...item} />
            ))}
          </Carrusell>
        </Categories>
      )}

      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carrusell>
            {myList.map((item) => (
              <CarrusellItem key={item.id} {...item} isList />
            ))}
          </Carrusell>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carrusell>
          {trends.map((item) => (
            <CarrusellItem key={item.id} {...item} />
          ))}
        </Carrusell>
      </Categories>

      <Categories title="Originals">
        <Carrusell>
          {originals.map((item) => (
            <CarrusellItem key={item.id} {...item} />
          ))}
        </Carrusell>
      </Categories>
    </React.Fragment>
  );
};

//va a indicar al provider qué información necesitamos del store.
const mapStateToProps = (state) => {
  //mapeo props del store a usar
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searchResult: state.searchResult,
  };
};

// export default Home //No conectado
export default connect(mapStateToProps, null)(Home); //conector a mandar al provider

//connect(props_to_use, reducer_actions)(connection)

//actions es para ejecutar un reducer
