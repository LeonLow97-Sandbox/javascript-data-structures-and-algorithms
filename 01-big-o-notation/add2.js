function addUpTo(n) {
    return n * (n + 1) / 2
}

console.log(addUpTo(6))

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log(`Time Elaspsed: ${(t2 - t1) / 1000} seconds.`)