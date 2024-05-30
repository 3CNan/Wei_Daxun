// main.js
const { register } = require('./function.js'); // Import the function from function.js

const iterations = 10;
const delay = 10000; // 10 seconds

function runFunctionWithDelay(iteration) {
    if (iteration <= iterations) {
        a(iteration);
        setTimeout(() => {
            runFunctionWithDelay(iteration + 1); // Call the function recursively with the next iteration
        }, delay);
    }
}

runFunctionWithDelay(1); // Start with the first iteration

// https://bhvt.cflac.org.cn/

