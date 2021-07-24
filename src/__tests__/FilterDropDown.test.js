import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FilterDropDown from '../components/FilterDropDown';

const levels = [
  { id: 0, name: '--' },
  { id: 1, name: 'Entry' },
  { id: 2, name: 'Mid Level' },
  { id: 3, name: 'Senior Level' },
  { id: 4, name: 'management' },
  { id: 5, name: 'Internship' },
];

const store = createStore(() => [], {});
const Wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

Wrapper.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

describe('Home', () => {
  it('renders correctly', () => {
    const tree = render(
      <BrowserRouter>
        {' '}
        <FilterDropDown options={levels} name="Levels" changeFilter={() => { }} />
        {' '}
      </BrowserRouter>, { wrapper: Wrapper },
    );
    expect(tree).toMatchSnapshot();
  });
});
