const array = [1, 2, 3];

const par = (element) => element %2 == 0;

function algunoEsPar(arr){
console.log(arr.some(par));
}

algunoEsPar(array);