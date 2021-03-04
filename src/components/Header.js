import React from 'react';
import logo from '../images/RickandMortyLogo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <img className="App__logo" src={logo} alt="logo de Rick and Morty" title="logo de Rick and Morty" />
      </header>
    );
  }
}
export default Header;
