import './sass/main.scss';
import countryCardTeml from './templates/countryCardTeml.hbs';
import _ from '../node_modules/lodash/lodash';
import fetchCountries from './js/fetchCountries';


const refs ={
    input: document.querySelector('[data-input="searchQuery"]'),
    container: document.querySelector('.js-container')
};
    console.log(refs.container);
    
    refs.input.addEventListener('input', _.debounce(getInputValue , 1000));

    function getInputValue(e) {
        // console.log(e.target.value);
    const searchQuery = e.target.value;  
        fetchCountries(searchQuery).then(r=>makeCards(r));
    }


    function makeCards(ArrOfCountries) {
        console.log('make',  ArrOfCountries);
       const test = ArrOfCountries.map((card)=> card.name);
       console.log(test);
       console.log(typeof ArrOfCountries)
       console.log(countryCardTeml(ArrOfCountries));
        refs.container.insertAdjacentHTML( 'beforeend', countryCardTeml(ArrOfCountries));
    }



