// import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterDropDown from '../components/FilterDropDown';
import '../styles.css';
// import fetchData from '../logic/fetchData';
import {
  cataegories, levels, companies, locations,
} from './fitlerdata';
import changeFilterAction from '../actions/index';

const Filters = (props) => {
  const [company, setCompany] = useState();
  const [location, setLocation] = useState();
  const [category, setCategory] = useState();
  const [level, setLevel] = useState();
  const { filterJobs } = props;

  const filterChangeHandler = (fieldname, value) => {
    switch (fieldname) {
      case 'Company':
        setCompany(value);
        break;
      case 'Location':
        setLocation(value);
        break;
      case 'Job Category':
        setCategory(value);
        break;
      case 'Experience Level':
        setLevel(value);
        break;
      default:
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filter = {
      company, location, category, level,
    };
    console.log(filter);
    filterJobs(filter);
  };

  return (

    <div className="filter-panel">
      <FilterDropDown options={companies} name="Company" changeFilter={filterChangeHandler} />
      <FilterDropDown options={locations} name="Location" changeFilter={filterChangeHandler} />
      <FilterDropDown options={cataegories} name="Job Category" changeFilter={filterChangeHandler} />
      <FilterDropDown options={levels} name="Experience Level" changeFilter={filterChangeHandler} />
      <button onClick={(e) => handleSearch(e)} type="submit"> Search Jobs </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterJobs: (filter) => {
    dispatch(changeFilterAction(filter));
  },
});

Filters.propTypes = {
  filterJobs: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Filters);

// const getData = async () => {
//   let data = {};
//   data = await fetchData('https://www.themuse.com/api/public/companies?api_key=52c53b7a661df891c7d5773f63a1237ea2da27a628f7e95455a2b73ae669136e&page=1&descending=true');
//   const comp = data.results;
//   const arr = [];
//   for (let i = 0; i < comp.length; i += 1) {
//     arr.push({ id: comp[i].id, name: comp[i].name });
//   }
//   console.log(arr);
//   setCompanies(arr);
// };

// useEffect(() => {
//   getData();
// });
