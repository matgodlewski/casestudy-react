// write text in console
console.log('I am script.js');

const BTN_1_ID = 'btn1';
const BTN_2_ID = 'btn2';
const LABEL_ID = 'label1';

const addClickEventToButton = (button, handler) => {
    button.addEventListener('click', handler);
}

const addEventListeners = () => {
    console.log('adding event listeners');
    const btn1 = document.getElementById(BTN_1_ID);
    const btn2 = document.getElementById(BTN_2_ID);

    addClickEventToButton(btn1, btn1Func);
    addClickEventToButton(btn2, btn2Func);
}

window.onload = () => {
    console.log('on load');
    addEventListeners();
}

const updateLabel = (text) => document.getElementById(LABEL_ID).innerText = text;

const btn1Func = () => {
    console.log('btn1 clicked');
    updateLabel('btn1');
}

const btn2Func = () => {
    console.log('btn2 clicked');
    updateLabel('btn2');
}
