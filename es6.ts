// 1: let const

// 2 arrow function
// es5 -cũ
// function addTwoNumbers(a: number, b: number): number {
//     return a + b;
// }
//es6 - mới
// const addTwoNumbers = (tham so param) => {return};
const addTwoNumbers = (a: number, b: number): number => a + b;
//3 template string
let name1 = "John";
let age1 = 30;

let message = `Hello ${name1}, you are ${age1} years old.`;
console.log(message);


// 4 destructuring
const person = {
    name: "Alice",
    age: 25,
    gender: "female",
    occupation: "engineer"
};
// const name2 = person.name;
// const age2 = person.age;
//es6
const {name: namePerson, age} = person;
console.log(namePerson, age);

const colors = ["red", "green", "blue"];
const [redColor, greenColor] = colors;
console.log(redColor, greenColor);

// 5 default parameter
// lợi ích
// - làm cho hàm dễ đọc hơn
// - maintain những hàm có sẵn mà muốn thêm logic mới vào

const waitForElement = async (timeout: number = 500)=>{
        setTimeout(()=>{
        console.log('Waited for ', timeout, 'ms');
        }, timeout)
}
waitForElement(1000);
const greet = (name: string = "Unknown"): void => {
    console.log(`Hello, ${name}!`);
}
greet("Bob");
greet();
// 6 rest parameter
// thu thập các parameter thành 1 mảng trong hàm
const sumAll = (...numbers: number[]): number=>{
    let total =0;
    for(let num of numbers){
        total += num;
    }
    return total;
}
console.log(sumAll(1,2,3,4,5)); // 15


// 7 spread operator
// gộp nhiều mảng => 1 mảng, gộp nhiều object thành 1 object
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arrayMerge = [...arr1, ...arr2];
console.log(arrayMerge); // [1,2,3,4,5,6]

// gộp object
const obj1 = {
    name: "Charlie",
    age: 28
};
const obj2 = {
    gender: "male",
    occupation: "designer"
}
const objMerge = {...obj1, ...obj2};
console.log(objMerge); 
// 8 async await: bất đồng bộ
// 9: modules import export