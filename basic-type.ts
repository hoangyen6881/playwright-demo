// import hàm từ module.ts
import {sumThreeNumbers, multiplyNumber, sumEvenNumbers} from "./module.ts";

// Khai bao bien
let resuleSum = sumThreeNumbers(10, 20, 30);
console.log("Sum of three numbers: " + resuleSum);

let resultMultiply = multiplyNumber(5, 6);
console.log("Multiply of two numbers: " + resultMultiply);

let resultSumEven = sumEvenNumbers([1, 2, 3, 4, 5]);
console.log("Sum of even numbers: " + resultSumEven);   

let username: string = "Nguyen Van A";
let age: number = 30;
let price: number = 30.45;
let isActive: boolean = true;

let email: any = "abd@gmail.com";
let quantity: any = 10;

let fruits: string[] = ["Apple", "Banana", "Orange"];
let numbers: number[] = [1, 2, 3, 4, 5];


console.log(username);
console.log(age);

// Khai báo hàm (function)
function addTwoNumbers(number1:number, number2:number): number{
    return number1 + number2;
}

let result = addTwoNumbers(5, 10);
console.log("Result: " + result);

function sumArrayNumber(numbers: number[]): number{
    let sum: number = 0;
    // for(let i = 0; i < numbers.length; i++){
    //     sum += numbers[i];
    // }
    for(let num of numbers){
        sum += num;
    }
    return sum;
}

result = sumArrayNumber([1, 2, 3, 4, 5]);
console.log("Sum of array: " + result);