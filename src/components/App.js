import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import CharacterList from './CharacterList';
import Filters from './Filters';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('all');
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'species') {
      setSpeciesFilter(data.value);
    }
  };

  const FilteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      if (speciesFilter === 'all') {
        return true;
      } else {
        return character.species === speciesFilter;
      }
    });

  return (
    <div className="App">
      Hola Mundo
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={FilteredCharacters} />
    </div>
  );
};

export default App;
