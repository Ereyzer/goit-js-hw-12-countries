import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import PNotify, { notice, info, alert, success, error, close } from '@pnotify/core';

import countryCardTeml from './templates/countryCardTeml.hbs';
import listTemplate from './templates/list.hbs';

import _ from '../node_modules/lodash/lodash';
import fetchCountries from './js/fetchCountries';

const refs ={
    input: document.querySelector('[data-input="searchQuery"]'),
    container: document.querySelector('.js-container'),
    list: document.querySelector('.js-list')
};

    let countries = [];
    refs.list.addEventListener('click', onItemsClick)
    refs.input.addEventListener('input', _.debounce(getInputValue, 500));

    function getInputValue(e) {
        const searchQuery = e.target.value.trim();  
        if (!searchQuery)return;
        refs.container.innerHTML = '';
        refs.list.innerHTML = '';
        fetchCountries(searchQuery)
        .then(testRes)
        .then(makeList)
        .then((res)=>{
            if (res.length === 1) {
                refs.list.innerHTML ='';
                return makeCards(res);
             }
        })
        .catch(errorEntries)

    }

    function testRes(res) {
        if(res.length > 10)throw new Error('We have more ten results. Please enter more characters!');
        if(res.status === 404)throw new Error('no EXIST');
         return res;
    }

    function errorEntries(text) {
           error({
            text: `${text}`,
            delay: 800
        });
        return text;
    }

    function makeList(list) {
        refs.list.innerHTML = `${listTemplate(list)}`;
        countries = [...list];
        return list;
    }

    function makeCards(ArrOfCountries) {
        if(!Array.isArray(ArrOfCountries))return;
        
        refs.container.insertAdjacentHTML( 'beforeend', countryCardTeml(ArrOfCountries));
    }

    function onItemsClick(e) {
        const country = e.target.textContent
        refs.input.value = country;
        makeCards(countries.reduce((acc,el)=>{
            if(el.name === country){
                acc.push(el);
            }
        return acc;},[]))
        refs.input.value = '';
        refs.list.innerHTML = '';
        return;
    }

   