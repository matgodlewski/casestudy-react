// write text in console
console.log('I am script.js');

// function declaration
function exampleFunction1() {
    console.log('exampleFunction1');
}

function exampleFunction2(param1, param2) {
    console.log(`exampleFunction2 with params: ${param1} and ${param2}`);
}

function exampleFunction3(param1, param2) {
    return param1 + param2;
}

exampleFunction1();
exampleFunction2('a', 4);
console.log(exampleFunction3(3, 4));

// function expression
const exampleFunction4 = function (a) { // anonymous
    return a + 1;
}

const exampleFunction5 = function ef5(a) {
    return a * 2;
}

console.log(exampleFunction4(2));
console.log(exampleFunction5(2));

const factorial = function fac(n) { // not anonymous -- can call itself
    return n < 2
        ? 1
        : n * fac(n - 1); // ternary operator
}

console.log(`fac(3): ${factorial(3)}`);

// arrow function
const exampleArrowFunction1 = (a) => {
    return a + 1;
}

const exampleArrowFunction2 = (a) => a * 2;

console.log(exampleFunction4(2));
console.log(exampleFunction5(2));

// callback
const exampleArrowFunctionWithCallback = (a, callback) => {
    callback('my param');
    return a + 1;
}

console.log(exampleArrowFunctionWithCallback(1, (a) => console.log(`callback with param: ${a}`)));

// ternary operator
const notTernaryOperator = (value) => {
    if (value > 9000) {
        return 'It\'s Over 9000!';
    }

    return 'it\'s lame';
}

const withTernaryOperator = (value) => {
    return value > 9000
        ? 'It\'s Over 9000!'
        : 'it\'s lame';
}

// const withTernaryOperator = (value) =>
//     value > 9000
//         ? 'It\'s Over 9000!'
//         : 'it\'s lame';

console.log(notTernaryOperator(8000));
console.log(withTernaryOperator(10000));
