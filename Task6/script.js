//1)Class-Movie

//constructor of the class movie, if the rating is empty need to fill "PG" as value
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        if (rating === "") {//this condition is applied only if the value of rating string is empty
            this.rating = "PG";
        } else {
            this.rating = rating;
        }
    }
}
//creates an instance of the class MOvie

movie = new Movie("Casino Royale", "Eon Productions", "PG13");

//Add Some movies to array
//Using push keyword which helps to add values in array
let Movies = [];
Movies.push(new Movie("Stranger Things", "XYZ Productions", "R"));
Movies.push(new Movie("Guardians of the Galaxy", "Marvel Studio", ""));
Movies.push(new Movie("Guardians of the Galaxy2", "Marvel Studio", ""));
Movies.push(new Movie("Guardians of the Galaxy3", "Marvel Studio", "R"));

// //this function will returns the movies which contains ratings as "PG"
function getPG(movie) {
    let PGMovies = [];
    movie.forEach(element => {
        if (element.rating === "PG") {
            PGMovies.push(element);
        }
    });
    return PGMovies;
}
let pgmovie = getPG(Movies);
console.log(pgmovie)




//2) Convert the UML diagram to Typescript class. - use number for double

class circle {
    // constructor() { }
    // constructor(radius) { }
    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        console.log(this.radius);
    }
    setRadius(radius) {
        let c = new circle(radius);
        console.log(c);
    }
    getColor() {
        console.log(this.color);
    }
    setColor(radius, color) {
        let c1 = new circle(radius, color);
        console.log(c1);
    }
    toString() {
        console.log("Circle[radius=" + this.radius + ",color=" + this.color + "]");
    }
    getArea() {
        let pi = 3.14;
        console.log(pi * this.radius * this.radius);
    }
    getCircumference() {
        let pi = 3.14;
        console.log(2 * pi * this.radius);
    }
}
let circleObj = new circle();
circleObj.getRadius();
circleObj.setRadius(2);
circleObj.getColor();
circleObj.setColor(1.0, 'Pink');
circleObj.toString();
circleObj.getArea();
circleObj.getCircumference();



//3) Write a “person” class to hold all the details.

class Person1 {
    constructor(name, email, phone, location) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.location = location;
    }
    getDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Location: ${this.location}`);
    }
}

let Person = new Person1('Aswin Babu', 'mjaswin001@gmail.com', '9043117922', 'TamilNadu');

Person.getDetails();




//4) write a class to calculate the uber price

class UberPrice {
    constructor(Distance, CostPerMile) {
        this.Distance = Distance;
        this.CostPerMile = CostPerMile;
    }
    GetPrice() {
        return this.Distance * this.CostPerMile;
    }
}

let UberCalculator = new UberPrice(6, 25);

console.log(UberCalculator.GetPrice());










