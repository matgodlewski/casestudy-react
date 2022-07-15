import { mockedRest } from '../api.js';

mockedRest()
    .then(response => {
        // some fancy code;
        console.log('hello there')
    });
