
let numIn = prompt("What number do you want a percentage of?");
let percent = prompt("What percentage of the number do you want?");

function perMaker(percent, numIn) {
    let decPer = percent/100
    return alert(numIn * decPer);
};

perMaker(numIn, percent);