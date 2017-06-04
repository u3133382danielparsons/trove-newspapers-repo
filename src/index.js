import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import data from './data/data';
import './styles/index.css';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();
