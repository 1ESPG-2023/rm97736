//const liElement = document.getElementsByTagName("li");

//for (let index = 0; index < liElement.length ; index++) {
    //console.log(liElement[index].textContent)
    
//}

//console.log(liElement.length)

//DECLARAÇÃO DE ARRAYS
let nrl = [1,2,3,4,5];
let nrl2 = [6,7,8,9,10];

let nr3 = [nrl,nrl2]

console.log(`Array-1 ${nrl}`);
console.log(`Array-2 ${nrl2}`);


//Listando um array | Tecnica especial
nr3.forEach((itemDoaArray)=>{
    console.log(`Array-3 sendo listado ${itemDoaArray}`)
})