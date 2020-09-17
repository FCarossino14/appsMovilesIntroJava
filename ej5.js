const array = [10, 4, 3];

const mayor4 = (element) => element >= 4;

function aprobo(arr){
console.log(arr.every(mayor4));
}

aprobo(array);