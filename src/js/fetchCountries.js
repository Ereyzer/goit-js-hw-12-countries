// import '@pnotify/core/dist/BrightTheme.css';
import PNotify, { notice, info, alert, success, error } from '@pnotify/core';

const BASE_URL =  'https://restcountries.eu/rest/v2/';

export default function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}name/${searchQuery}`)
    .then(response => response.json())
    .then((r)=>{
        if(r.length > 10){
            return minTenNotify();
        }  
        console.log(r);
        return r;
    })
    .catch(errorEntries);
}

function errorEntries(params) {
    error({
        text: 'please enter more characters!'
    })
    return 404;
}

function name(params) {
    alert('hello');
}
function minTenNotify(r) {
    notice({
        text: 'повна хуйня2!'
    })
}