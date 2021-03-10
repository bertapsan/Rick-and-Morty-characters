import userEvent from '@testing-library/user-event';
import '../stylesheets/App.scss';
import { Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [episodeFilter, setEpisodeFilter] = useState(0);
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    }
    if (data.key === 'species') {
      setSpeciesFilter(data.value);
    } else if (data.key === 'episode') {
      setEpisodeFilter(data.value);
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
    })
    .filter((character) => {
      if (episodeFilter === 0 || episodeFilter === '') {
        return true;
      } else {
        return character.episode === parseInt(episodeFilter);
      }
    });
  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.id;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    return <CharacterDetail character={foundCharacter} />;
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters handleFilter={handleFilter} name={nameFilter} episode={episodeFilter} />
          {/* nameFiltered para input controlado, vuelta atrás y que aparezca lo q la usuaria escribió */}
          <CharacterList characters={FilteredCharacters} />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
