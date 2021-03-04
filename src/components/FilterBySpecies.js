import React from 'react';

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'species',
    });
    console.log('species', ev.target.value);
  };
  return (
    <>
      <label htmlFor="species">Especie:</label>
      <select name="species" id="species" onChange={handleChange}>
        <option value="all">Todos</option>
        <option value="Alien">Alien</option>
        <option value="Human">Humano</option>
      </select>
    </>
  );
};

export default FilterBySpecies;
