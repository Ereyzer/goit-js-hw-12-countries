import './sass/main.scss';
fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies').then(responsive => responsive.json()).then(console.log);