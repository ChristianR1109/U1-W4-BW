function calcoloPercentuale(){
const randomGiuste= Math.floor(Math.random()*101);
console.log(randomGiuste);

const massimo=100;
const randomSbagliate=massimo-randomGiuste;
console.log(randomSbagliate);

const variabileGiuste=document.querySelector(".percentualeCorrect");
const giuste=document.createElement("h1");
giuste.innerText=randomGiuste+"%";
variabileGiuste.appendChild(giuste);



const variabileSbagliate=document.querySelector(".percentualeWrong");
console.log(variabileSbagliate);
const sbagliate= document.createElement("h1");
sbagliate.innerText=randomSbagliate +"%";
variabileSbagliate.appendChild(sbagliate);
}
calcoloPercentuale();