

const BASE_URL =  'https://restcountries.eu/rest/v2/';

export default function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}name/${searchQuery}`)
    .then(response => response.json())
    // .then(kurva)
    .catch((r)=>console.log("lot of 10"));
}

// fetchCountries.then((response)=>{
//     return Promise((resolve, reject)=>{
//         if(response.length > 10){
//             reject()
//         }
//         resolve()
//     })
// })