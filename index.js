// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    return cats.push(name);

}

function destructivelyPrependCat(name) {
    return cats.unshift(name)

}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
    
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift()
}

function appendCat(name) {
    name = [...cats, 'Broom']
    return name;
}

function prependCat(name) {
    name = ['Arnold', ...cats]
    return name;
}

function removeLastCat(name){
    name = cats.slice(0.1,2)    
    return name;
}

function removeFirstCat(name) {
    name = cats.slice(1,3,1)
    return name;
}




