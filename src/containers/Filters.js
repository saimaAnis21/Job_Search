import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterDropDown from '../components/FilterDropDown';
import '../styles.css';
import {
  categories, levels,
} from './fitlerdata';
import changeFilterAction from '../actions/index';
import getCompanies from '../logic/getCompanies';

const Filters = (props) => {
  const [company, setCompany] = useState();
  const [category, setCategory] = useState();
  const [level, setLevel] = useState();
  const [companies, setCompanies] = useState([{ id: 0, name: '--' }]);
  const { filterJobs } = props;

  const getData = async () => {
    const companiesList = await getCompanies();
    if (companiesList !== 'ERROR') {
      setCompanies(companiesList);
    }
  };

  useEffect(() => {
    getData();
  });

  const filterChangeHandler = (fieldname, value) => {
    switch (fieldname) {
      case 'Company':
        setCompany(value);
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
      company, category, level,
    };
    filterJobs(filter);
  };

  return (

    <div className="filter-panel">
      <FilterDropDown options={companies} name="Company" changeFilter={filterChangeHandler} />
      <FilterDropDown options={categories} name="Job Category" changeFilter={filterChangeHandler} />
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
