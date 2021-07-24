import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/App';

const store = createStore(() => [], {});
const Wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

Wrapper.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

describe('App', () => {
  it('renders correctly', () => {
    const tree = render(<App />, { wrapper: Wrapper });
    expect(tree).toMatchSnapshot();
  });
});
