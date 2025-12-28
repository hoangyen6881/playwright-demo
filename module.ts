function sumThreeNumbers(a: number, b: number, c: number): number {
    return a + b + c;
}

function multiplyNumber(x: number, y: number): number {
    return x * y;
}

// Tính tổng các số chẵn trong mảng
function sumEvenNumbers(numbers: number[]): number {
    let sum: number = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}

export { sumThreeNumbers, multiplyNumber, sumEvenNumbers };