import React from 'react';
import '../stylesheets/layout/_filters.scss';

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
      <div>
        <label htmlFor="species">Especie : </label>
        <select className="SelectSpecies" name="species" id="species" onChange={handleChange}>
          <option value="all">Todas las especies</option>
          <option value="Alien">Alien</option>
          <option value="Human">Humano</option>
        </select>
      </div>
    </>
  );
};

export default FilterBySpecies;
