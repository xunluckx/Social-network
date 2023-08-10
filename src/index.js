import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redux/reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

reportWebVitals();
