/*
1.1 O(1)
1.2 O(n)
2. O(n) because % gets slower with larger numbers?
3. O(n^2) polynomial - nested for loops
4. O(n) because it looks at every index of an array
5. O(n) because it looks at every index of an array
6. O(n^2) polynomial - nested for loops
7. fibonacci sequence - O(n) because every loop it pushes one value into an array
8. O(log(n)) - every time it runs, it reduces the amount of data to parse by half (roughly)
9. O(1) - accessing an index of an array takes the same amount of time regardless of which index it is
10. checks if a number is prime? O(n) because all natural numbers between 0 and n have to be checked
11. tower of hanoi
*/
// 12. solve the drills 1 - 7 from your previous checkpoint iteratively

// 1. counting sheep

function sheep(n) {
    for (let i = n; i > 0; i--) {
        console.log(`${i}: Another sheep jumps over the fence`)
    }
    console.log('All sheep jumped over the fence')
}

//sheep(3)

// 2. power calculator

function power(base, exp) {
    if (exp < 0) {
        console.log('exponent should be >= 0')
        return;
    }

    if (exp == 1) {
        return base;
    }

    baseTemp = base;
    for (let i = 0; i < exp; i++) {
        baseTemp *= base
    }
    return baseTemp

}

//console.log(power(2,4));

// 3. reverse string

function revS(str) {
    let temp = ''
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i]
    }
    return temp
}

//console.log(revS('dictionary'));

// 4. nth triangular number

function tri(n) {
    let temp = 0;
    for (i = 0; i <= n; i++) {
        temp += i;
    }
    return temp
}

//console.log(tri(8));

// 5. string splitter

function spl(str,sep) {

    let sepVal = str.indexOf(sep);
    if(sepVal == -1){
        return out.push(str)
    } 

    let out = [];
    let lastSep = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == sep) {
            out.push(str.slice(lastSep, i))
            lastSep = i + 1;
        }
    }
    out.push(str.slice(lastSep))
    return out;
}

//console.log(spl('02/20/2020','/'));

// 6. fibonacci

function fib(n) {
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[n];
}

//console.log(fib(6))

// 7. factorial

function fac(n) {
    let out = 1
    for (let i = 1; i <= n; i++) {
        out *= i
    }
    return out;
}

console.log(fac(5));


// 13. 
// 1. linear O(n)
// 2. linear O(n)
// 3. linear O(n)
// 4. linear O(n)
// 5. linear O(n)
// 6. exponential O(2^n)
// 7. linear O(n)

// 14.
// 1. linear O(n)
// 2. linear O(n)
// 3. linear O(n)
// 4. linear O(n)
// 5. linear O(n)
// 6. linear O(n)
// 7. linear O(n)
