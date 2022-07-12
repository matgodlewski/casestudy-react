// write text in console
console.log('I am script.js');

const exampleString1 = 'I am string that can use double "quote" inside';
const exampleString2 = "I am string that can use single 'quote' inside";

const exampleNumber1 = -69;
const exampleNumber0 = 0;
const exampleNumber2 = 420;

const exampleBoolean1 = true
const exampleBoolean2 = false

const exampleNull = null;
const exampleUndefined = undefined;

const exampleObject1 = {
    prop1: 'and there you can use any type of variable, even object',
    prop2: null,
    prop3: 1,
}

console.log(exampleObject1);
console.log(exampleObject1.prop1); // and there you can use any type of variable, even object

const exampleObject2 = {
    innerObj: {
        innerInnerObj: {
            innerInnerInnerObj: {
                andSoOn: '...',
            },
        },
    },
}

console.log(exampleObject2);
console.log(exampleObject2.innerObj.innerInnerObj.innerInnerInnerObj.andSoOn); // ...

const exampleObj3 = {
    multiInnerObj: exampleBoolean2,
    someValue: 'someValue',
}

const exampleArray1 = []; // empty array
const exampleArray2 = ['a', 'b', 'c']; // string array
const exampleArray3 = [1, 2, 3]; // number array
const exampleArray4 = [true, false, false]; // boolean array
const exampleArray5 = [1, 'test', 'three', undefined, {value: 'value1', value2: {value: 1}}]; // array with any object

console.log(exampleArray1);
console.log(exampleArray2);
console.log(exampleArray3);
console.log(exampleArray4);
console.log(exampleArray5);
