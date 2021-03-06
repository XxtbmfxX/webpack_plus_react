import React from 'react'
// import PropTypes from 'prop-types';

import "../styles/components/CarrusellItem.scss";


import play from "../assets/static/play-icon.png";
import plus from "../assets/static/plus-icon.png";

const CarrusellItem = ( {cover, title, year, contentRating, duration} ) => {
    return (
        <div className="carousel-item">
        <img className="carousel-item__img"
          src={cover} alt={title} />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={play} alt="Play Icon" />
            <img className="carousel-item__details--img" src={plus} alt="Plus Icon" />
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
        </div>
      </div>
    )
}

// CarrusellItem.propTypes = {
//   cover: PropTypes.string, 
//   title: PropTypes.string, 
//   year: PropTypes.number, 
//   contentRaiting: PropTypes.string, 
//   duration: PropTypes.number, 

// };

export default CarrusellItem
