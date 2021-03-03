import React from 'react';

const CharacterCard = (props) => {
  return (
    <li>
      <img
        src={props.character.image}
        alt={`Imagen de ${props.character.name}`}
        title={`Imagen de ${props.character.name}`}
      />
      <p>{props.character.name}</p>
      <p>{props.character.species}</p>
    </li>
  );
};

export default CharacterCard;
