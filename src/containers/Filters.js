import React, { useState, useEffect } from 'react';
import FilterDropDown from '../components/FilterDropDown';
import '../styles.css';
import fetchData from '../logic/fetchData';

const Filters = () => {
  const [companies, setcompanies] = useState([{ id: 1, name: 'location1' }, { id: 2, name: 'location2' }, { id: 3, name: 'location3' }]);
  const locations = [{ id: 1, name: 'location1' }, { id: 2, name: 'location2' }, { id: 3, name: 'location3' }];
  const categories = [{ id: 1, name: 'cat1' }, { id: 2, name: 'cat2' }, { id: 3, name: 'cat3' }];
  const levels = [{ id: 1, name: 'level1' }, { id: 2, name: 'level2' }, { id: 3, name: 'level3' }];

  const getData = async () => {
    let data = {};
    data = await fetchData('https://www.themuse.com/api/public/companies?api_key=52c53b7a661df891c7d5773f63a1237ea2da27a628f7e95455a2b73ae669136e&page=1&descending=true');
    const comp = data.results;
    const arr = [];
    for (let i = 0; i < comp.length; i += 1) {
      arr.push({ id: comp[i].id, name: comp[i].name });
    }
    setcompanies(arr);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="filter-panel">
      <FilterDropDown options={companies} name="Company" />
      <FilterDropDown options={locations} name="Location" />
      <FilterDropDown options={categories} name="Job Category" />
      <FilterDropDown options={levels} name="Experience Level" />
    </div>
  );
};

export default Filters;
