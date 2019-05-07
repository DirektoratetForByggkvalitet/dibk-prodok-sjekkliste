import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import translations from './api/translations';

import './helpers/scroll-on-product-selection';

const root = document.querySelector('div[data-bind], #root');

ReactDOM.render(<App translations={translations} />, root); /* eslint no-undef: 0 */
