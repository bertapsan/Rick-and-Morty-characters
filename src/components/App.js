import userEvent from '@testing-library/user-event';
import { Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
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

  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.id;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    console.log(foundCharacter);
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    }
  };

  return (
    <div className="App">
      Hola Mundo
      <Switch>
        <Route exact path="/">
          <Filters handleFilter={handleFilter} name={nameFilter} />
          {/* nameFiltered para input controlado, vuelta atrás y que aparezca lo q la usuaria escribió */}
          <CharacterList characters={FilteredCharacters} />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
