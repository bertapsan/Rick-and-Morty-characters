import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/_characterCard.scss';

const CharacterCard = (props) => {
  return (
    <li className="Card">
      <Link to={`/character/${props.character.id}`}>
        <img
          className="Card__image"
          src={props.character.image}
          alt={`Imagen de ${props.character.name}`}
          title={`Imagen de ${props.character.name}`}
        />
        <p className="Card__name">{props.character.name}</p>
        <p className="Card__species">{props.character.species}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
