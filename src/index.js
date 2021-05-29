import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';

import PNotify, { notice, info, alert, success, error } from '../node_modules/@pnotify/core';
import countryCardTeml from './templates/countryCardTeml.hbs';
import _ from '../node_modules/lodash/lodash';
import fetchCountries from './js/fetchCountries';
// import { alert, defaultModules } from '@pnotify/core';
// import * as PNotifyMobile from '@pnotify/mobile';

console.log('харить така хуйня')
// defaultModules.set(PNotifyMobile, {});


const refs ={
    input: document.querySelector('[data-input="searchQuery"]'),
    container: document.querySelector('.js-container')
};
    
    
    refs.input.addEventListener('input', _.debounce(getInputValue , 1000));


    function getInputValue(e) {
        const searchQuery = e.target.value;  

        fetchCountries(searchQuery).then((r)=>{

            if(r.length > 10){
                console.log('>10')
                alert({
                    text: 'повна хуйня!'
                })
                return null;
            }          
            console.log('<10')  
            return r;
        })
        .then(makeCards)
        .catch((r)=>{
            console.log('work r= ', r);
        //    return name();
        }
        )
            
    }

    // function name(params) {
    //   return  
    // }
    // function reject(r) {
    //     r = null
    //     return r;

    // }

    function makeCards(ArrOfCountries) {
        refs.container.insertAdjacentHTML( 'beforeend', countryCardTeml(ArrOfCountries));
    }

    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       reject('success!');
    //     }, 2000);
    //   });
    //   const onResolve = data => {
    //     console.log('INSIDE promise.then - onResolve');
    //     console.log(data); // "Data passed into resolve function :)"
    //   };
      
    //   const onReject = error => {
    //     console.log('INSIDE promise.then - onReject');
    //     console.log(error); // "Error passed into reject function :("
    //   };

    //   promise.then(onResolve, onReject)

