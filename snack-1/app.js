/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const bike = [{nome:'mountainbike', peso: 20 },{nome:'tandem', peso: 35}]
let bikeName = bike[0].nome
console.log(bikeName)
let bikeWeight = bike[0].peso
console.log(bikeWeight)
console.log(bike[0])
let nameAndWeight = bikeName + ' ' + bikeWeight
console.log(nameAndWeight)