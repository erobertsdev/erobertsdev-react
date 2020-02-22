import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fontawesome/css/fontawesome.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
