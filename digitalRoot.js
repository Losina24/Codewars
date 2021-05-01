function digital_root(n) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    while (n - 10 >= 0) {
        n = n.toString().split('').map(Number).reduce(reducer);
    }
    return n;
}