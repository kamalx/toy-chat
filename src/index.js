import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addUser } from './actions';
import chat from './reducers';
import { setupSocket } from './sockets'

const store = createStore(chat)

// dispatch actions for init
store.dispatch(addUser('Me'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
