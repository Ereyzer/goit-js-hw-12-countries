const BASE_URL =  'https://restcountries.eu/rest/v2/';

export default function fetchCountries(searchQuery) {
        return fetch(`${BASE_URL}name/${searchQuery}`)
        .then(response => response.json()).catch(console.error)
    }

































// const BASE_URL =  'https://restcountries.eu/rest/v2/';


// export default function fetchCountries(searchQuery) {

//     const fetchPromise = () => new Promise((resolve, reject)=>{
//         return fetch(`${BASE_URL}name/${searchQuery}`)
//         .then(response => response.json())
//         .then((response)=>{
//             console.log('first response');
//             if(response.length > 10)return reject('We have more ten results. Please enter more characters!');
//             console.log('second response');
//             if(response.status === 404)return reject('no EXIST');
//             console.log('third response');
//              resolve(response);
//             console.log('for response', response);
//         }).catch(errorEntries)
//     })
//     return fetchPromise().catch(errorEntries)
// }

// function errorEntries(text) {
//     return   error({
//         text: `${text}`
//     });
// }
