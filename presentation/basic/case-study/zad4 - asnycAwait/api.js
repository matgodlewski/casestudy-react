// example mocked api -- do not edit (:
const mockedData = {
    'date': new Date(),
    'payload': {
        id: 'PAYLOAD_1',
        message: 'Hello there!',
    },
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// after 3 sec return value
export function mockedRest() {
    return new Promise((resolve, reject) => setTimeout(
        () => getRandomInt(2)
            ? resolve(mockedData)
            : reject(new Error('Api error')),
        3000,
    ));
}
