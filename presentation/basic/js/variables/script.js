// write text in console
console.log('I am script.js');

// var
console.log('!!!--- var ---!!!')

var exampleVarA = 'this is example var o:';

if (1 > 0) {
    var exampleVarA = 'var in if';
    console.log(exampleVarA); // var in if
}

function exampleFunctionVar() {
    var exampleVarA = 'var in function';
    console.log(exampleVarA); // var in function
}

exampleFunctionVar();

console.log(exampleVarA); // var in if

// let
console.log('!!!--- let ---!!!')

let exampleLetA = 'this is example let d:'

if (1 > 0) {
    let exampleLetA = 'let in if';
    console.log(exampleLetA); // let in if
}

if (1 > 0) {
    let exampleLetA = 'let in if';
    console.log(exampleLetA); // let in if
}

function exampleFunctionLet() {
    let exampleLetA = 'let in function';
    console.log(exampleLetA); // let in function
}

exampleFunctionLet();

console.log(exampleLetA); // this is example let d:

//let exampleLetA = 'test'; // SyntaxError: Identifier 'exampleLetA' has already been declared

exampleLetA = 'new value for let';
console.log(exampleLetA); // this is example let d:

if (true) {
    // let exampleLetA;

    exampleLetA = 'let changed in if';

    // console.log('in if -> ' + exampleLetA);
}

console.log(exampleLetA); // this is example let d:

// const
console.log('!!!--- const ---!!!');

const exampleConstA = 'this is example const (:'

if (1 > 0) {
    // var exampleConstA = 'const in if'; // SyntaxError: Identifier 'exampleConstA' has already been declared
    console.log(exampleConstA); // this is example const (:
}

function exampleFunctionVar() {
    var exampleConstA = 'const in function';
    console.log(exampleConstA); // const in function
}

// exampleConstA = 'const in function'; // TypeError: Assignment to constant variable.

exampleFunctionVar();

console.log(exampleConstA); // this is example const (:

