const calculator = (operator, a, b) => {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? 'Tidak bisa dibagi nol' : a / b;
        case '%': return a % b;
        case 'persen': return (a * b) / 100;
        default: return 'tidak valid';
    }
};

console.log(calculator('+', 5, 3));   // 8
console.log(calculator('-', 35, 7));  // 28
console.log(calculator('*', 10, 5));   // 50
console.log(calculator('/', 144, 12)); // 12
console.log(calculator('%', 15, 4));  // 3
console.log(calculator('persen', 5000, 20)); // 1000
console.log(calculator('/', 9, 0));   // Tidak bisa dibagi nol