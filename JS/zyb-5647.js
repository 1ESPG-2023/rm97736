//Função para recuperação de elementos no html para serem trabalhados os dados 
//Pegando o elemento pelo seu tipo:

//const liElement = document.getElementsByTagName("li");


//for (let index = 0; index <liElement.length; index++) {
   // console.log(liElement[index].textContent)
    
//}
//console.log(liElement.length)

//Declaração de Arrays 
//let num1=[1,2,3,4,5];
//let num2=[6,7,8,9,10];
//let num3=[num1,num2];


//console.log(`Array-1 ${num1}`);
//console.log(`Array-2 ${num2}`);
//console.log(`Array-3 ${num3}`);

//Listabdo um Array, Técnica especial
//num3.forEach((itemDoArray)=>{
    //console.log(`Array-3 sendo listado ${itemDoArray}`);
//})
//console.log(`Array-3 sendo listado ${num3}`);

// Listando o array com MAP
//num3.map((numero,key)=>{

    //console.log(`${(key+1)} - Itens do array - ${numero}`);
    //numero.forEach((digitos)=>{
        //console.log(digitos)
    //})
//})

// Convertendo HTMLColletion em Array de forma indireta
//const liElement = document.getElementsByTagName("li");
//const liElementArray = [...liElementHtml];

//liElementArray.map((item, key)=>{
    //console.log(`${key + 1} - ${item.textContent = LOCALIZADO}`)
//})

//console.log(liElement)

// function soma(p1,p2,p3) {
//     nr1 = p1;
//     nr2 = p2;

//     return (parseInt(nr1) + parseInt(nr2) + parseInt(p3))

//     //console.log(`Resultado: ${nr1 + nr2 + parseInt(parametro)}`);
//     //console.log(`Este é o parametro que foi passado: ${parametro}`);
// }

// //ARROW FUNCTION
// const mudaCor = ()=>{

//     //FUNÇÃO SET_TIME_OUT
//     setTimeout(soma(1,2,3), 5000);
// }

// mudaCor();

// function mudaCor(){
//     let r = "";
//     let g = "";
//     let b = "";

//     //random = gera números aleatorios entre 0 e 1
//     //ceil, floor e round que arrendondam o número para cima, para baixo ou aleatóriamente
    

//     //Determinando para a variavel r um valor entre 0 e 255
//     r = Math.round(Math.random()*255);
//     g = Math.round(Math.random()*255);
//     b = Math.round(Math.random()*255);

//     const cabecalho = document.querySelector(".cabecalho");

//     cabecalho.setAttribute("style", `background-color: rgb(${r},${g},${b})`)

//     tmp = setTimeout(mudaCor, 150);
//}

// mudaCor();

// function alteraBanner1() {

//     let nr = Math.round(Math.random() * 3);
//     let caminho = `img/banner-lateral-${nr}.png`;
    
//     const img1 = document.querySelector(".l-e > img");
//     img1.src = caminho;
    
// }

    
// alteraBanner1();
    
// function alteraBanner2() {
//     let nr = Math.round(Math.random() * 3);
//     let caminho = `img/banner-lateral-${nr}.png`;
    
    
//     const img2 = document.querySelector(".central > img");
//     img2.src = caminho;
    
// }

    
//     alteraBanner2();
    
// function alteraBanner3() {
    
//     let nr = Math.round(Math.random() * 3);
//     let caminho = `img/banner-lateral-${nr}.png`;
//     const img3 = document.querySelector(".l-d > img");
//     img3.src = caminho;
// }
    
// alteraBanner3();

// function alteraBanner() {

//     let nr = Math.ceil(Math.random() * 3);
    
//     const img1 = document.querySelector(".l-e > img");
//     const img2 = document.querySelector(".l-d > img");
    
//     let caminho = `img/banner-lateral-${nr}.png`;
//     img1.src = caminho;
    
//     nr = Math.ceil(Math.random() * 3);
//     caminho = `img/banner-lateral-${nr}.png`;
//     img2.src = caminho;

    
//     setTimeout(alteraBanner, 1000);
    
// }
    
// alteraBanner();

// const botao = document.querySelector(".central button");

// botao.addEventListener("click", ()=>{
//     const imgLampada = document.querySelector(".central img");
    

//     if(botao.textContent == "LIGAR"){
//         imgLampada.src = "img/pic_bulbon.gif"
//         botao.textContent = "DESLIGAR";
//     }else{
//         imgLampada.src = "img/pic_bulboff.gif"
//         botao.textContent = "LIGAR";
//     }
// })
// function ligaDesliga() {
//     const imgLampada = document.querySelector(".central img");
//     // const botao = document.querySelector(".central button");

//     if(botao.textContent == "LIGAR"){
//         imgLampada.src = "img/pic_bulbon.gif"
//         botao.textContent = "DESLIGAR";
//     }else{
//         imgLampada.src = "img/pic_bulboff.gif"
//         botao.textContent = "LIGAR";
//     }
// }

const inputUser = document.querySelector("input[name='nmUser']");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color: #ff0000");
});

inputUser.addEventListener("keyup", ()=>{
    if(inputUser.value.length < 8){
    inputUser.setAttribute("style", "outline-color: #ff0000");
    }else{
    inputUser.setAttribute("style", "outline-color: #dddddd");
    }

})