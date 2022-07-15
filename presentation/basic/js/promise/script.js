const exampleData = {
    "date": new Date(),
    "payload": [1, 2, 3, 4, 5, 6],
}

let counter = 0;

const mockedRest = () => new Promise((resolve, reject) => {
    if (counter % 2 === 0) {
        setTimeout(() => resolve(exampleData), 2000);
        return;
    }

    reject(new Error('API problem'));

    counter++;
})

mockedRest()
    .then(value => console.log('then 1', value))
    .catch(reason => console.warn(reason));

mockedRest()
    .then(value => console.log('then 2', value))
    .then(value => console.log('then 3', value)) // console log consumes value so value is undefined
    .catch(reason => console.warn(reason));


mockedRest()
    .then(value => value.payload)
    .then(value => console.log('then 5', value)) // console log consumes value so value is undefined
    .catch(reason => console.warn(reason));

const mockedRestReject = () => new Promise((resolve, reject) => setTimeout(() => reject(new Error('API problem')), 5000));

mockedRestReject()
    .then(value => console.log('then 1', value)) // every non pair call throw error
    .catch(reason => console.warn(reason));

mockedRest()
    .then(value => value.payload)
    .then(value => mockedRestWithProp(value))
    .then(value => console.log('promise func 1', value))
    .catch(reason => console.warn(reason));
