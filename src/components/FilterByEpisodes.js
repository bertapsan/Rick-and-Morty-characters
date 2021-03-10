import React from 'react';
import '../stylesheets/layout/_filters.scss';

const FilterByEpisodes = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'episode',
    });
    console.log(ev.target.value);
  };
  return (
    <>
      <div>
        <label htmlFor="name">Nº de Episodios : </label>
        <input
          type="number"
          name="episode"
          id="episodes"
          className="InputName"
          value={props.episode}
          onChange={handleChange}
        ></input>
        {/* value={props.name} para input controlado, vuelta atrás y que aparezca lo q la usuaria escribió */}
      </div>
    </>
  );
};

export default FilterByEpisodes;
