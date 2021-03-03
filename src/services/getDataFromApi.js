const getDataFromApi = () => {
  return fetch('//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          status: character.status,
          episode: character.episode,
        };
      });
    });
};

export default getDataFromApi;
