import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  console.log(props);
  if (props.character === undefined) {
    return (
      <div>
        <h2>No hay personajes con esas características</h2>
        <Link to="/">
          <span></span>
        </Link>
        <p>Vuelve atrás y sigue buscando</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{props.character.name}</h2>
        <Link to="/">
          <span></span>
        </Link>
        <section>
          <img src={props.character.image} alt={props.character.name} />
          <ul>
            <li>Status: {props.character.status}</li>
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
