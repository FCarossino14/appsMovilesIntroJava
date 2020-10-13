const array1 = [10, 4, 8, 5, 3];

function even(num){
    return num % 2 === 0;
}

function odd(num){
    return num % 2 !== 0;
}

function rechazar(cond, arr){
    array = arr.filter(element => (cond(element) === false));
    return array;
}

console.log(rechazar (even, array1));
console.log(rechazar (odd, array1));