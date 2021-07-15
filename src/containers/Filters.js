import React, { useEffect } from 'react';
// import React, { Component } from 'react';
import FilterDropDown from '../components/FilterDropDown';
import '../styles.css';

const Filters = () => {
  const companies = ['location1', 'location2', 'location3'];
  const locations = ['location1', 'location2', 'location3'];
  const categories = ['cat1', 'cat2', 'cat3'];
  const levels = ['Level1', 'Level2', 'Level3'];

  const getData = async () => {
    const url = 'https://www.themuse.com/api/public/companies?page=1&descending=true';
    let data = {};
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',

      });

      data = await response.json();
    } catch (e) {
      console.log('error msg: Error getting data');
    }
    const comp = data.results;
    for (let i = 0; i < comp.length; i += 1) {
      // console.log(comp[i].name);
      companies.push(comp[i].name);
    }
    console.log(companies);
    // return data;
  };

  useEffect(() => {
    getData();
    // let companies = {};
    // companies = getData()
    //   .then((data) => data)
    //   .then((val) => val);

    // console.log(companies.values);
    // const companies = [];
    // for (let i = 0; i < data.results.length; i += 1) {
    //   console.log(data.results[i].name);
    //   this.companies.push(data.results[i].name);
    // }
  }, []);

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
