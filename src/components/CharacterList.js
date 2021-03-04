import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return (
    <section>
      <ul>
        {characterElements}

        {/* <CharacterCard /> */}
      </ul>
    </section>
  );
};

export default CharacterList;
