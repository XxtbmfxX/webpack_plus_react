import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


import '../styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = ({ user }) => {
  return (
    <header className="header">
      
      <Link to="/" >
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="" />
          <p>Perfil</p>
          </div>
            {user.email !== undefined ?
                <ul>
                  <li><p>Bienvenido <b>{user.email.slice(0, -9)}</b></p></li>
                  <li><p>Mi perfil</p></li>
                  <li><Link to="/register">Registro</Link></li>
                </ul>
                :
                <ul>
                  <li><Link to="/login">Iniciar sesion</Link></li>
                </ul>
            }
      </div>
    </header>
  
  )
};


const mapStateToProps = state => {
  return {
     user: state.user,
  }
}
export default connect(mapStateToProps,null)(Header)