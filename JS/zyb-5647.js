//Função para recuperação de elementos no html para serem trabalhados os dados 
//Pegando o elemento pelo seu tipo:

//const liElement = document.getElementsByTagName("li");


//for (let index = 0; index <liElement.length; index++) {
   // console.log(liElement[index].textContent)
    
//}
//console.log(liElement.length)

//Declaração de Arrays 
let num1=[1,2,3,4,5];
let num2=[6,7,8,9,10];
let num3=[num1,num2];


console.log(`Array-1 ${num1}`);
console.log(`Array-2 ${num2}`);
console.log(`Array-3 ${num3}`);

//Listabdo um Array, Técnica especial
//num3.forEach((itemDoArray)=>{
    //console.log(`Array-3 sendo listado ${itemDoArray}`);
//})
//console.log(`Array-3 sendo listado ${num3}`);

// Listando o array com MAP
num3.map((numero,key)=>{

    console.log(`${(key+1)} - Itens do array - ${numero}`);
    //numero.forEach((digitos)=>{
        //console.log(digitos)
    //})
})

// Convertendo HTMLColletion em Array de forma indireta
const liElement = document.getElementsByTagName("li");
const liElementArray = [...liElementHtml];

liElementArray.map((item, key)=>{
    console.log(`${key + 1} - ${item.textContent}`)
})

console.log(liElement)
