function prependCat() {

    return ['Arnold', ...cats]

}

 

cats.length = 0

cats.push('Milo', 'Otis', 'Garfield');

 

function removeLastCat() {

    return [...cats.slice(0, 2)]

}

 

cats.length = 0

cats.push('Milo', 'Otis', 'Garfield');

 

function removeFirstCat() {

    return [...cats.slice(1)]

}

 