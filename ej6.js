const array1 = [10, 4, 3];
const array2 = ([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]]);


function aprobo(arr){
    const mayor4 = (element) => element >= 4;
    console.log(arr.every(mayor4));
}

function quienesAprobaron(array){
    const aprobados = array.filter(element => aprobo(element));
    console.log(aprobados);
}

quienesAprobaron(array2);