import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/_characterDetail.scss';

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
    return <h1>personaje no encontrado</h1>;
  } else {
    return (
      <div className="Detail">
        <Link to="/">
          <span>
            <i className="fas fa-backward"> Volver</i>
          </span>
        </Link>
        <h2>{props.character.name}</h2>
        <Link to="/">
          <span></span>
        </Link>
        <section className="Detail__section">
          <ul className="Detail__section--list">
            <li>
              <img
                src={props.character.image}
                className="Detail__section--image"
                alt={`Imagen de ${props.character.name}`}
                title={`Imagen de ${props.character.name}`}
              />
            </li>
            <li>Status: {iconStatus()}</li>
            <li>Especie: {props.character.species}</li>
            <li>Origen: {props.character.origin}</li>
            <li>Episodes: {props.character.episode}</li>
          </ul>
        </section>
      </div>
    );
  }
};

export default CharacterDetail;
