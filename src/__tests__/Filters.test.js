import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Filters from '../containers/Filters';

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
        <Filters filterJobs={() => {}} />
        {' '}
      </BrowserRouter>, { wrapper: Wrapper },
    );
    expect(tree).toMatchSnapshot();
  });
});
