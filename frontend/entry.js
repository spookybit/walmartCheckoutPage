import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Store from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={Store}/>, document.getElementById('root'));
})
