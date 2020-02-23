import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const menuButton = document.querySelectorAll('.Menu-item');
const menuCheckbox = document.querySelector('.Menu-checkbox');

for (let button of menuButton) {
	button.addEventListener('click', () => (menuCheckbox.checked = false));
}

serviceWorker.register();
