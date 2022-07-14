// write text in console
console.log('I am script.js');

const exampleObject = {
    prop1: 'and there you can use any type of variable, even object',
    prop2: null,
    prop3: 1,
    anotherObject: {
        prop4: 'prop4',
        prop5: 11,
    }
}

const {
    prop1 = 'this will be overwritten',
    prop2,
    prop3,
    prop11 = 'default value',
    anotherObject: {
        prop4,
        prop5,
    }
} = exampleObject;

console.log(prop1);
console.log(prop3 + prop5);
console.log(prop4);
console.log(prop11);

const list = ['a', 1, 'c', {value: 'test'}];

const [a, one, c, obj] = list;
console.log(a, one, c, obj);

const [a2, , , obj2] = list;
console.log(a2, obj2);

const [a3, one3, ...otherItems] = list;
console.log(a3, one3, otherItems);


