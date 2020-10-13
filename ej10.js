const array1 = [10, 4, 8, 5, 3];

function contiene(num, arr){
    const cumple = arr.some(element => (element) === num);
    return cumple;
}

console.log(contiene (1, array1));
console.log(contiene (5, array1));