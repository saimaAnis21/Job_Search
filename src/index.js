import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import App from './components/App';
import state from './state';
import rootReducer from './reducers/index';
import Routes from './Routes';

const store = createStore(rootReducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
