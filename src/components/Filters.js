import React from 'react';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import '../stylesheets/layout/_filters.scss';

const handleForm = (ev) => {
  ev.preventDefault();
};

const Filters = (props) => {
  return (
    <section className="Filters">
      <form onSubmit={handleForm}>
        <FilterByName handleFilter={props.handleFilter} name={props.name} />
        {/* name={props.name} para input controlado, vuelta atrás y que aparezca lo q la usuaria escribió */}
        <FilterBySpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};

export default Filters;
