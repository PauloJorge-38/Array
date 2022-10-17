const arr = 
["Froid", "Dudu", "Djoga", "Matue", "Vinny", "Abbot", "Wiul"]
console.log(arr)

//Adicionar Elementos
// push
arr.push("L7")
console.log(arr)


//unshift
arr.unshift("Teto")
console.log(arr)


// Remover elementos
//pop
let ultimoelemento = arr.pop()
console.log(arr)
console.log(ultimoelemento)

//shift
ultimoelemento = arr.shift()
console.log(arr)
console.log(ultimoelemento)

//Pesquisar por um elemento
//includes
const inclui = arr.includes("Abbot")
console.log(inclui)

//indexOf
const indice = arr.indexOf("Abbot")
console.log(indice)

//Cortar e concatenar
//slice
const cortar = arr.slice(0, 4)
const outros = arr.slice(-4) //Forma diferente de cortar o array
console.log(arr)
console.log(cortar)
console.log(outros)

//concat
const sociedade = cortar.concat(outros, "Xamã")
console.log(sociedade)

//Substituir dos Elementos
//splice
const elementosRemovidos = sociedade.splice(indice,  2, "Major RD")
console.log(sociedade)
console.log(elementosRemovidos)


//Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length ; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na  posição: " + indice)
}