import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/layout/_characterList.scss';

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  const searchResults =
    props.characters.length !== 0 ? <ul>{characterElements}</ul> : <p>No hay personajes con estas características</p>;

  return (
    <section className="List">
      <ul className="List__ul">
        {/* {characterElements} */}
        {searchResults}
        {/* <CharacterCard /> */}
      </ul>
    </section>
  );
};

export default CharacterList;
