const array1 = [10, 4, 8];


function hayAlgunNegativo(arr){
    const imp = (element) => element % 2 !== 0;
    console.log(arr.some(imp));
}


hayAlgunNegativo(array1);