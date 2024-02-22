//Get all the countries from Asia continent /region using Filter function

const XMLHttpRequest = require('xhr2');
let Request = new XMLHttpRequest();
Request.open("GET", "https://restcountries.com/v3.1/all")

Request.onload = function () {
    let countries = JSON.parse(Request.response);
    let Asia = countries.filter(coutry => coutry.region === 'Asia')
    let result = Asia.map(country => country.name.common);
    console.log(result)
}
Request.send();


//Get all the countries with a population of less than 2 lakhs using Filter function

const XMLHttpRequest = require('xhr2');
let Request = new XMLHttpRequest();
Request.open("GET", "https://restcountries.com/v3.1/all")

Request.onload = function () {
    let countries = JSON.parse(Request.response);

    let population = countries.filter(country => {
        if (country.population < 200000) {
            return true;
        }
    })
    let popu = population.map(country => country.name.common)
    console.log(popu)
}
Request.send();

// Print the following details name, capital, flag, using forEach function

const XMLHttpRequest = require('xhr2');
let Request = new XMLHttpRequest();
Request.open("GET", "https://restcountries.com/v3.1/all")

Request.onload = function () {
    let countries = JSON.parse(Request.response);
    countries.forEach(function (element) {
        console.log(element.name.common);
        console.log(element.flags.png);
        console.log(element.capital);
    });
}
Request.send();

// Print the total population of countries using reduce function

const XMLHttpRequest = require('xhr2');
let Request = new XMLHttpRequest();
Request.open("GET", "https://restcountries.com/v3.1/all")

Request.onload = function () {
    let countries = JSON.parse(Request.response);
    let totalPopulation = countries.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.population;
    }, 0)
    console.log(totalPopulation)
}
Request.send();

// Print the country that uses US dollars as currency.

const XMLHttpRequest = require('xhr2');
let Request = new XMLHttpRequest();
Request.open("GET", "https://restcountries.com/v3.1/all")

Request.onload = function () {
    let countries = JSON.parse(Request.response);
    // let uscurrency =
    countries.forEach(function (element) {
        if (element.currencies !== undefined && element.currencies.USD) {
            console.log(element.name.common);
        }
    })
}
Request.send();