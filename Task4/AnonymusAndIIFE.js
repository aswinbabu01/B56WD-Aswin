// ANONYMOUS FUNCTION

// Print Odd numbers in an array

let arr = [1, 2, 3, 4, 6, 5];
let odd = [];
let output = function () {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            odd.push(arr[i]);
        }
    }
}
output()
console.log(odd)

//Convert all the strings to the title caps in a string array

let str = ["array", "datatype", "oops", "callback"];
let UpperCase = function () {
    let caps = [];
    for (let i = 0; i < str.length; i++) {
        caps.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));

    }
    return caps;
}
console.log(UpperCase());

//Sum all numbers in array

let array = [1, 2, 3, 4, 5, 7];
let Sum = 0;
let SumAll = function () {
    let Sum = array.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
    return Sum;
}
console.log(SumAll())

//Return all prime numbers

let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let primeout = [];

function Primenum(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < numb.length; i++) {
    if (Primenum(numb[i])) {
        primeout.push(numb[i]);
    }
}

console.log(primeout);


//Return all palindromes in an array

let arrp = ["deed", "wow", "rotator", "sun", "moon", "netlify"];
let out = [];

let palindromeArray = arrp.filter(str => {
    let palindromeStr = str.toLowerCase()
    return palindromeStr == palindromeStr.split("").reverse("").join("")
})
console.log(palindromeArray)

// //Return median of two sorted arrays of the same size

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 6, 9, 12, 15]

let merge = [...arr1, ...arr2].sort((a, b) => a - b);;
let length = merge.length;
let median;

let findMedian = function () {
    if (length % 2 == 0) {
        let med = (length / 2);
        median = Math.floor((merge[med - 1] + merge[med]) / 2);
    } else {
        let med = Math.floor(length / 2);
        median = merge[med];
    }
}
findMedian()
console.log(median)

// Remove Duplicates from an array

let arrays = ["Joey", "monica", "chandler", "monica", "rachel", "ross", "Joey"]

let uniqueArrays = arrays.filter(function (item, index, arr) {
    return arr.indexOf(item) === index;
});

console.log(uniqueArrays)

// Rotate an array by k times

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let kr = 3;
let rotate = function (arr3, kr) {
    return arr3.map(function (_, index, array) {
        return array[(index + kr) % array.length];
    });
};
let rotatedArray = rotate(arr, kr);
console.log(rotatedArray);



//IIFE Function

// Print Odd numbers in an array

(function () {
    let ArrNum = [1, 2, 3, 4, 5, 6, 7, 8]
    for (let i = 0; i < ArrNum.length; i++) {
        if (ArrNum[i] % 2 !== 0) {
            console.log(ArrNum[i])
        }
    }
})();

//Convert all the strings to the title caps in a string array

let result = (function () {
    let strr = ["array", "datatype", "oops", "callback"];
    let foo = [];
    for (let i = 0; i < strr.length; i++) {
        foo.push(strr[i].charAt(0).toUpperCase() + strr[i].slice(1))
    }
    return foo;
})();
console.log(result)

//Sum all numbers in array

let array4 = [1, 2, 3, 4, 5, 7, 9, 7];
let summ = 0;
let SumALL = (function () {
    return array4.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
})();

summ = SumALL;
console.log(summ);


//Return all prime numbers

let nummb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let Primynum = (function () {
    nummb = nummb.filter((num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    })
})();
console.log(nummb);


//Return all palindromes in an array

let arrpp = ["deed", "wow", "rotator", "sun", "moon", "netlify"];
let palindromeArray2 = (function () {
    return arrpp.filter(str => {
        let palindromeStr = str.toLowerCase()
        return palindromeStr == palindromeStr.split("").reverse("").join("")
    });
})();
console.log(palindromeArray2)

//Return median of two sorted arrays of the same size

let arrm1 = [1, 3, 5, 7, 9];
let arrm2 = [2, 4, 6, 8, 10];

let median1 = (function (arrm1, arrm2) {
    let mergedArray = [...arrm1, ...arrm2].sort((a, b) => a - b);
    let n = mergedArray.length;
    let mid = Math.floor(n / 2);

    if (n % 2 === 0) {
        return Math.floor((mergedArray[mid - 1] + mergedArray[mid]) / 2);
    } else {
        return Math.floor(mergedArray[mid]);
    }
})(arrm1, arrm2);

console.log(median1);


// Remove Duplicates from an array

let arrayWithDuplicates = [1, 2, 3, 3, 4, 5, 5, 6];

let uniqueArray = (function (arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
})(arrayWithDuplicates);

console.log(uniqueArray);


// Rotate an array by k times

let originalArray = [1, 2, 3, 4, 5];
let k = 2;

let rotateArray = (function (arr, k) {
    let n = arr.length;
    k = k % n;
    return arr.slice(k, n).concat(arr.slice(0, k));
})(originalArray, k);

console.log(rotatedArray); 
