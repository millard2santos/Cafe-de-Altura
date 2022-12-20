const logo = document.querySelectorAll(".nav-1 > *")
// console.log(logo);

const cesta = document.querySelectorAll("nav > img")
// console.log(cesta);

const coffe = document.querySelectorAll('.card-coffe')
const coffeName = document.querySelectorAll('.card-coffe-txt > p:first-child')
const coffePrice = document.querySelectorAll('.card-coffe-txt > p:last-child')
const coffeImg = document.querySelectorAll('.card-coffe > img')
// console.log(coffeName);
// console.log(coffePrice);
// console.log([...coffeImg].map(x => x.currentSrc))
console.log(coffe);
coffe.forEach( x =>console.log(`El café ${x.children[1].children[0].innerText} tiene la imagen ${x.children[0].currentSrc} y un precio de ${x.children[1].children[1].innerText}`))







const shop = document.querySelector('.location-img')
// console.log(shop.currentSrc);

const inputs = document.getElementsByClassName('hover-focus')

// console.log(inputs);
