const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);

const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realArr = newArr.flat(Infinity)
// console.log(realArr);


// console.log(Array.isArray("Akhil")) // false
// console.log(Array.from("Akhil")) // [ 'A', 'k', 'h', 'i', 'l' ]
// console.log(Array.from({name: "Akhil"})); // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]



