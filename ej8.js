const array1 = [10, 4, 8, 5, 3];

function even(num){
    return num % 2 === 0;
}

function odd(num){
    return num % 2 !== 0;
}

function cuantosCumplen(cond, arr){
    array = arr.filter(element => (cond(element) === true));
    return array.length;
}

console.log(cuantosCumplen (even, array1));
console.log(cuantosCumplen (odd, array1));