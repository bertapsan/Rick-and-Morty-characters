import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/layout/_characterList.scss';
import NotFound from '../images/Character_Not_Found.png';

const CharacterList = (props) => {
  const characterElements = props.characters
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((character) => {
      return <CharacterCard key={character.id} character={character} />;
    });
  // sort() nos permite ordenar lista de personajes

  const searchResults =
    props.characters.length !== 0 ? (
      <ul className="List__ul">{characterElements}</ul>
    ) : (
      <div className="Unluck">
        <img className="Unluck__image" src={NotFound} />
        <p className="Unluck__text">No hay personajes con estas características</p>
      </div>
    );

  return (
    <section className="List">
      {/* <ul className="List__ul"> */}
      {/* {characterElements} */}
      {searchResults}
      {/* <CharacterCard /> */}
      {/* </ul> */}
    </section>
  );
};

export default CharacterList;
