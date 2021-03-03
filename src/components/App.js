import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import CharacterList from './CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);
  return;
  <div className="App">
    Hola Mundo
    <CharacterList />
  </div>;
};

export default App;
