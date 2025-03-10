/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const championship =[
    {nome: 'Inter',punti: 0,falli: 0},
    {nome: 'Roma',punti: 0,falli: 0}
]

// generazione punti e falli 
for(let i = 0; i < championship.length; i++){
    let squad = championship[i];

    squad.punti = Math.floor(Math.random()*50)+1
    squad.falli = Math.floor(Math.random()*50)+1


}
console.log(championship)

// generazione nuovo array

const championshipFouls = []

for(let i = 0; i < championship.length; i++){

    const squad = championship[i];
    const newData = {
        nome: squad.nome,
        falli: squad.falli
    }
    championshipFouls.push(newData)

}
console.log(championshipFouls)