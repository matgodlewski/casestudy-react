const exampleData = {
    "date": new Date(),
    "payload": [1, 2, 3, 4, 5, 6],
}

const mockedRest = () => new Promise((resolve, reject) => setTimeout(() => resolve(exampleData), 2000));

const promiseFunc = async () => {
    console.log('A');

    mockedRest()
        .then(() => console.log('B'));

    console.log('C');

    const response = await mockedRest();

    console.log('D');

    mockedRest()
        .then(() => console.log('E'));

    console.log('F');
}

promiseFunc();
