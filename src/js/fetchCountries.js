// import '@pnotify/core/dist/BrightTheme.css';
import PNotify, { notice, info, alert, success, error } from '@pnotify/core';
import { functions, reject } from 'lodash';

const BASE_URL =  'https://restcountries.eu/rest/v2/';


export default function fetchCountries(searchQuery) {

    const fetchPromise = () => new Promise((resolve, reject)=>{
         fetch(`${BASE_URL}name/${searchQuery}`)
        .then(response => response.json())
        .then((response)=>{
            if(response.length > 10){
                return reject('We have more ten results. Please enter more characters!');
            }
            if(response.status === 404){
                return reject('no EXIST');
            }   
            resolve(response);   
        }).catch(errorEntries)
    })
    return fetchPromise().catch(errorEntries)
}

function errorEntries(text) {
    return   error({
        text: `${text}`
    });
}
