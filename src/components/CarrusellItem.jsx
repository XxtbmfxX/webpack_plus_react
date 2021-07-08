import React from 'react'
import { connect } from 'react-redux' //conectar estado <--> componente
import { setFavorite, deleteFavorite } from '../actions'

import "../styles/components/CarrusellItem.scss";


import play from "../assets/static/play-icon.png";
import plus from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";

const CarrusellItem = ( props ) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => { //guardado a favoritos
    //llamamos a la action y le pasamos un objeto
    props.setFavorite({id, cover, title, year, contentRating, duration})
    console.log('holas');
  }

  const handleDeleteFavorites = (itemId) => {
    props.deleteFavorite(itemId)
  }

  return (
    <div className="carousel-item">
      
      <img className="carousel-item__img" src={cover} alt={title} />

      <div className="carousel-item__details">

        <div>
          <img className="carousel-item__details--img" src={play} alt="Play Icon" />
          {isList ? 
            <img className="carousel-item__details--img"
              src={removeIcon}
              alt="Play Icon"
              onClick={() => handleDeleteFavorites(id)} />
            :
            <img className="carousel-item__details--img"
              src={plus}
              alt="Plus Icon"
              onClick={handleSetFavorite} />
          }
        </div>

        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>

    </div>
  )
}

// objeto con las distintas funciones para ejecutar una action en Redux.
const mapDispatchToProps = {
  setFavorite, //Parte de nuestras actions "encapsulada"
  deleteFavorite, 
}

export default connect(null, mapDispatchToProps)(CarrusellItem);
//No mapeamos ningun state,
