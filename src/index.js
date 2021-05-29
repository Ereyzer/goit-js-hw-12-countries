import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';

import countryCardTeml from './templates/countryCardTeml.hbs';
import _ from '../node_modules/lodash/lodash';
import fetchCountries from './js/fetchCountries';

const refs ={
    input: document.querySelector('[data-input="searchQuery"]'),
    container: document.querySelector('.js-container')
};
     
    refs.input.addEventListener('input', _.debounce(getInputValue , 500));

    function getInputValue(e) {
        const searchQuery = e.target.value;  
        if (!searchQuery) {
            return;
        }
        refs.container.innerHTML = '';
        fetchCountries(searchQuery)
        .then(makeCards)
        .catch(console.log)
    }

    function makeCards(ArrOfCountries) {
        if(!Array.isArray(ArrOfCountries)){
            return;
        }
        refs.container.insertAdjacentHTML( 'beforeend', countryCardTeml(ArrOfCountries));
    }


