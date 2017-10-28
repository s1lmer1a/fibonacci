'use strict';
const memo = new Map();
// key: order, val: answer
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const fib_num = fib(n - 1) + fib(n - 2);
    memo.set(n, fib_num);
    return fib_num;
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}