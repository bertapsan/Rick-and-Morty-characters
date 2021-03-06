import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/_characterCard.scss';

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.character.id}`}>
      <li className="Card">
        <img
          className="Card__image"
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          title={`Imagen de ${props.character.name}`}
        />
        <p className="Card__name">{props.character.name}</p>
        <p className="Card__species">
          {props.character.species}
          <i className="fas fa-plus-circle"></i>
        </p>
      </li>
    </Link>
  );
};

export default CharacterCard;
