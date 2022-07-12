// variables
var i = 0;
var longI = 1000000000;

// get element form HTML by ID
var btn = document.getElementById("btn1");

// if button exist add even listener on even click
if (btn !== null) {
    btn.addEventListener("click", () => {
        console.log("click");
    })
} else {
    console.log(`there is no button: ${btn}`);
}

// get element form HTML by ID
var btn2 = document.getElementById("btn2");

// if button exist add even listener on even click
if (btn2 !== null) {
    btn2.addEventListener("click", () => {
        console.log("click");
    })
} else {
    console.log(`there is no button: ${btn}`);
}

// simulation of log running task
while (i < longI) {
    i++;
    const a = i % 10000000;

    if (a === 0) {
        console.log(i / 10000000.0);
    }
}

// write text in console
console.log('script 2');
