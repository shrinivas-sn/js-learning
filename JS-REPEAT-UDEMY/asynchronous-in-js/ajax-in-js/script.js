//async means not occuring or executing at the same time
//AJAX menas asynch js and xml allow to communicate with remote web servers in an asynch way

'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////
//xml https request
// const getCountriesData = function(country){
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function() {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     const language = Object.values(data.languages)[0];
//     const currencies = Object.values(data.currencies)[0].name;

//     console.log(data);
//     const html = `
//     <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population}</p>
//             <p class="country__row"><span>🗣️</span>${language}</p>
//             <p class="country__row"><span>${currencies}</span>CUR</p>
//           </div>
//     </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// })};
// getCountriesData('india')
// getCountriesData('usa')
// getCountriesData('russia')