

// const sum = (a = 2, b) => a + b;

// console.log(sum(10, 8));

// let arr = "JavaScript is fun";

// for (let char of arr) {
//     console.log(char + char)
// }



// const sumElements = (...arr) => {
//     let sum = 0;

//     arr.forEach(num => {
//         sum += num;
//     })

//     return sum;
// };

// console.log(sumElements(10, 10, 20, 15))


// spreading attributes

const max = arr => {
    return Math.max(...arr);
};

// console.log(max([10, 20, 100]))


var map = new Map();

map.set('name', 'John');
map.set('id', '20');
map.set('interest', ["basketball", "coding", "learning new things"]);

// console.log(map.get("name"));
// console.log(map.get("id"));
// console.log(map.get("interest"));


// sets helps to avoid duplicates in our objects
var sets = new Set();

sets.add("hello");
sets.add("hello");

sets.add("World");
sets.add("World");
sets.add("World");

for (let value of sets) console.log(value);


var arraySet = new Set([5, 5, 10, 10, 4, 4]);


console.log(arraySet)


// spreading the arraySet object and putting everything into the array
console.log([...arraySet]);


