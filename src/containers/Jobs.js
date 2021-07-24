import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchData from '../logic/fetchData';
import JobDesc from '../components/JobDesc';
import '../styles.css';

const Jobs = (props) => {
  const [jobs, setJobs] = useState([{
    id: '', company: '', name: '', site: '', content: '',
  }]);

  const { filters } = props;

  const getData = async () => {
    const { company, category, level } = filters;
    let data = {};
    let url = 'https://www.themuse.com/api/public/jobs?api_key=52c53b7a661df891c7d5773f63a1237ea2da27a628f7e95455a2b73ae669136e';

    if (company !== undefined && company !== '--') {
      url += `&company=${company}`;
    }
    if (category !== undefined && category !== '--') {
      url += `&category=${category}`;
    }
    if (level !== undefined && level !== '--') {
      url += `&level=${level}`;
    }
    url += '&page=1';

    data = await fetchData(url);
    const jobsData = [];

    if (data !== 'ERROR') {
      if (data.results) {
        for (let i = 0; i < data.results.length; i += 1) {
          jobsData.push({
            id: data.results[i].id,
            company: data.results[i].company.name,
            name: data.results[i].name,
            site: data.results[i].refs.landing_page,
            content: data.results[i].contents,

          });
        }
      }
      setJobs(jobsData);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="job-panel">
      {
      jobs.map((job) => (
        <JobDesc info={job} key={Math.random()} />
      ))
      }

    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

Jobs.propTypes = {
  filters: PropTypes.shape({
    company: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }),

};

Jobs.defaultProps = {
  filters: {
    company: 'comp1',
    category: 'cat1',
    level: 'lev1',

  },
};

export default connect(mapStateToProps)(Jobs);
