import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import './styles.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
