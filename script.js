
// Question 1

let numbers = [1, 5, 3, 8, 2,4,6,7,9,10];

let ordered_numbers = numbers.sort((a,b) => a - b)

let squared_numbers = numbers.map(num => num*num)

console.log("ordered numbers")
console.log(numbers)

console.log("squared numbers")
console.log(squared_numbers)

numbers.push(25)
numbers.push(35)
numbers.push(17)
console.log( "first number bigger than 25")
console.log( numbers. find(num => num>25))

let len= numbers.length
if(numbers.filter(num=> num > 5).length ===len){

console.log("all numbers are bigger than 5")
}

if (numbers.find(num => num==3)===undefined){
    console.log("3 not found")
}
console.log("filter for even")
console.log(numbers.filter(num => num%2==0))



console.log("original: ")
console.log(numbers)

console.log("spliced: ")
numbers.splice(numbers.length/2,2)
console.log(numbers)


numbers = [1,2,32,4,55,16,7,8,9,10]
console.log("result of multiplying all numbers")
console.log(numbers.reduce((prev_num , num)=>prev_num*num ))

console.log("index of first number bigger than 5")
console.log(numbers.findIndex(num=> num>5))

console.log("last element")
console.log(numbers.pop())

console.log("element added")
numbers.push(100)
console.log(numbers)

// Question 2

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

let filterd_names = names.filter( name => name.toLowerCase().includes('a'))

console.log("Filtered names")
console.log(filterd_names);

console.log("joined string")
console.log(names.join('-'));



let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];
fruits.forEach(fruit =>{
    if(fruit.includes('b')){
        console.log("list containers a fruit that has the letter B in it")
    } 
})

let spliced_fruits = fruits.slice(2,4)

console.log("spliced fruits: ");
console.log(spliced_fruits);



console.log(" Added yellow: ");
fruits.unshift("yellow")

console.log(fruits);


// Question 3

let words = ['hello', 'world', 'javascript', 'array', 'function'];

let lengths = words.map (word => word.length)

console.log(lengths);
let element = "javascript"

words.includes (element)? console.log(element): console.log(element+" doesn't exist")


// Javasacript lab

function add(num_1, num_2){
    return num_1 + num_2
}
function subtract(num_1, num_2){
    return num_1 - num_2
}

function multiply( num_1, num_2){
    return num_1 * num_2

}

function divide(num_1, num_2){
    return num_1 / num_2
}


function remainder(num_1, num_2){
    return num_1 % num_2
}

function square(num_1){
    return num_1*num_1
}


