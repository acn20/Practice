function isPrime(n) {
    if (n < 0) {
        throw new Error("The number is negative");
    }
    if (n < 2) {
        return false;
    }
    if(n == 2) {
        return true;
    }

    return false;
}