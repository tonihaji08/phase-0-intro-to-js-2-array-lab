// Write your solution her
let cats=["Milo", "Otis", "Garfield"]
let destructivelyAppendCat=(name)=>{
    cats.push (`${name}`)
}
let  destructivelyPrependCat=(name)=>{
    cats.unshift(`${name}`)
}
    let destructivelyRemoveFirstCat=(name)=>{
        cats.shift(`${name}`)
    }
    let destructivelyRemoveLastCat=(name)=>{
        cats.pop(`${name}`)
    }
    let appendCat=(name)=>{
        const newCats=[...cats,name]
        return newCats
    }
    let   prependCat=(name)=>{
        const newCats=[name,...cats]
        return newCats
    }
    let   removeLastCat=(name)=>{
        const newCats=[...cats]
        newCats.pop(`${name}`)
        return newCats
    }
    let removeFirstCat=(name)=>{
        const newCats=[...cats]
        newCats.shift(`${name}`)
        return newCats
    }