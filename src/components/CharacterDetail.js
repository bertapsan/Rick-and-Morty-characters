import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  const iconStatus = () => {
    if (props.character.status === 'Alive') {
      return <i class="fas fa-heartbeat"></i>;
    } else if (props.character.status === 'Dead') {
      return <i class="fas fa-dizzy"></i>;
    } else if (props.character.status === 'unknown') {
      return <i class="far fa-question-circle"></i>;
    }
  };
  if (props.character === undefined) {
    return <h1>usuario no encontrado</h1>;
  } else {
    return (
      <div>
        <Link to="/">
          <span>
            Volver
            {/* <i className="fas fa-backward">Volver</i> */}
          </span>
        </Link>
        <h2>{props.character.name}</h2>
        <Link to="/">
          <span></span>
        </Link>
        <section>
          <img src={props.character.image} alt={props.character.name} />
          <ul>
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
