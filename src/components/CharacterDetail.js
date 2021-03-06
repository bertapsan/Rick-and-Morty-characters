import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/_characterDetail.scss';
import NotFound from '../images/Not_Found.png';

const CharacterDetail = (props) => {
  const iconStatus = () => {
    if (props.character.status === 'Alive') {
      return <i className="fas fa-heartbeat"></i>;
    } else if (props.character.status === 'Dead') {
      return <i className="fas fa-dizzy"></i>;
    } else if (props.character.status === 'unknown') {
      return <i className="far fa-question-circle"></i>;
    }
  };
  if (props.character === undefined) {
    return (
      <div className="NotFound">
        <img className="NotFound__image" src={NotFound} />
        <p className="NotFound__text">
          Put... salvapedos ! No me pongas a prueba y deja de trastear la URL o lo que sea que estás haciendo !
        </p>
        <Link to="/">
          {/* <span className="Detail_forward"> */}
          <div className="backward">
            <i className="fas fa-backward"></i>
          </div>
          {/* </span> */}
        </Link>
      </div>
    );
  } else {
    return (
      <div className="Detail">
        <Link to="/">
          <span></span>
        </Link>
        <section className="Detail__section">
          <h2 className="Detail__section--h2">{props.character.name}</h2>
          <ul className="Detail__section--list">
            <li>
              <img
                src={props.character.image}
                className="Detail__section--image"
                alt={`Imagen de ${props.character.name}`}
                title={`Imagen de ${props.character.name}`}
              />
            </li>
            <li>Estatus : {iconStatus()}</li>
            <li>Especie : {props.character.species}</li>
            <li>Origen : {props.character.origin}</li>
            <li>Episodios : {props.character.episode}</li>
          </ul>
        </section>
        <Link to="/">
          {/* <span className="Detail_forward"> */}
          <div className="backward">
            <i className="fas fa-backward"></i>
          </div>
          {/* </span> */}
        </Link>
      </div>
    );
  }
};

export default CharacterDetail;
