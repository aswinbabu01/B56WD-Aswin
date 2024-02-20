//Arrow Function

//Print odd numbers in an array

let numbers = (a) => {
    if (a % 2 === 1) {
        console.log(a);
    }
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= arr.length; i++) {
    numbers(arr[i]);
}

//Convert all the strings to title caps in a string array

let Arr = ["hello", "welcome", "greet"];

let titlecaps = Arr.map(s => {
    return s.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
});
console.log(titlecaps);



//Sum of all numbers in array

let sumAll = (a, b, c, d, e) => {
    console.log(a + b + c + d + e);
}
sumAll(1, 2, 3, 4, 5);

// Return all the prime numbers in an array//
const Prime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const array1 = [1, 6, 8, 9, 4, 5, 6, 2, 3, 7];

const primeNumbers = array1.filter(Prime);

console.log(primeNumbers);

// Return all the palindromes in an array

const isPalindrome = str => {
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};

const array = ["level", "hello", "madam", "world"];

const palindromes = array.filter(isPalindrome);

console.log(palindromes);


// Return median of two sorted arrays of the same size.

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

let median = (() => {
    const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const n = mergedArray.length;
    const mid = Math.floor(n / 2);

    return n % 2 === 0 ? (mergedArray[mid - 1] + mergedArray[mid]) / 2 : mergedArray[mid];
})();

console.log(median);


// Remove duplicates from an array

let removeDuplicates = arr => arr.filter((value, index, self) => self.indexOf(value) === index);
let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7];
let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates);


// Rotate an array by k times
let rotateArray = (arr, k) => {
    let n = arr.length;
    let rotationIndex = k % n;
    let rotatedArray = [...arr.splice(rotationIndex), ...arr];
    return rotatedArray;
};
let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 2;
let rotatedArray = rotateArray(originalArray, k);
console.log(rotatedArray);