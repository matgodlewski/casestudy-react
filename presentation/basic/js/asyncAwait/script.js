const exampleData = {
    "date": new Date(),
    "payload": [1, 2, 3, 4, 5, 6],
}

const mockedRest = () => new Promise((resolve, reject) => setTimeout(() => resolve(exampleData), 2000));
const mockedRestWithProp = (prop) => new Promise((resolve, reject) => setTimeout(() => resolve(prop), 2000));
const mockedRestReject = () => new Promise((resolve, reject) => setTimeout(() => reject(new Error('API problem')), 2000));

const promiseFunc = async () => {
    const firstDataFromApi = await mockedRest();
    const secondDataFromApi = await mockedRestWithProp(firstDataFromApi.payload);

    console.log('promise func', secondDataFromApi);
}

const promiseFuncReject = async () => {
    try {
        const resAwait = await mockedRestReject();
        console.log('promise func Reject', resAwait);
    }
    catch (error) {
        console.log('promise fail Reject', error);
    }
}

promiseFunc();
promiseFuncReject();
