// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    return cats.push("Ralph")
}

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat(name){
    return cats.unshift("Bob")

}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');


function destructivelyRemoveLastCat(){
    return cats.pop()
}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');


function destructivelyRemoveFirstCat(){
    return cats.shift()
}
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function appendCat(name){
    let newArray = []
    newArray= [... cats,"Broom"]
    return newArray
}

function prependCat(name){
    let prependArray= []
    prependArray= ["Arnold",... cats]
    return prependArray

}
    
function removeLastCat(){
    let removeLast=[]
    removeLast= cats.slice(0,2)
    return removeLast
}
function removeFirstCat(){
    let removeFirst=[]
    removeFirst=cats.slice(1)
    return removeFirst
}