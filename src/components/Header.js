import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/RickandMortyLogo.png';
import '../stylesheets/layout/_header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <Link to="../">
          <img className="Header__logo" src={logo} alt="logo de Rick and Morty" title="logo de Rick and Morty" />
        </Link>
      </header>
    );
  }
}
export default Header;
