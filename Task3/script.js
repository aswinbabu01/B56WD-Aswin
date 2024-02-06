//How to compare two JSON have same Properties without order?
//Solution : In given obj, I seprated both Value and key and compared by using conditional operator. then I used If else statement.

let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

if (obj1.age === obj2.age && obj1.name === obj2.name) {
    console.log("The condition is true");
} else {
    console.log("The condition is false")
}

//Use the rest Countries 'API URL > https://restcountries.com/v3.1/all and display all the country flags in console
//solution: I used for in to iterate the API by using XMLHttpRequest
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    for (let index in JSON.parse(xhr.responseText)) {
        console.log(JSON.parse(xhr.responseText)[index].flags.png);
    }
}
xhr.send();


//Use the rest Countries 'API URL > https://restcountries.com/v3.1/all and display all the countries names , region , sub-regions and population
//solution: I used for in to iterate the API by using XMLHttpRequest

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    for (let index in JSON.parse(xhr.responseText)) {
        console.log(JSON.parse(xhr.responseText)[index].countries);
        console.log(JSON.parse(xhr.responseText)[index].region);
        console.log(JSON.parse(xhr.responseText)[index].subregion);
        console.log(JSON.parse(xhr.responseText)[index].population);
    }
}
xhr.send();