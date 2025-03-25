function cetakFibonacciBaru(jumlah) {
    const deret = [0, 1];
    for (let i = 2; i < jumlah; i++) {
        deret[i] = deret[i - 1] + deret[i - 2];
    }
    return deret;
}

console.log("Deret Fibonacci Baru:", cetakFibonacciBaru(19));