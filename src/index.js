import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMHot from '@hot-loader/react-dom';
import App from './components/App';

const renderApp = (Component, element) => {
  return process.env.NODE_ENV === 'development'
    ? ReactDOM.render(Component, element)
    : ReactDOMHot.render(Component, element);
};

renderApp(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
