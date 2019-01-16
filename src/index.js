import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './fonts/fonts.css';
import 'typeface-roboto';
import 'reactstrap/dist/reactstrap.full.min.js';
import 'hover.css/css/hover-min.css';
import 'hover.css/scss/hover.scss';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();
