const dateOfBday = document.querySelector('#dob');
const luckyNumber = document.querySelector('#lucky-num');
const checkButton = document.querySelector('#btn-submit');
const outputMsg = document.querySelector('#msg');

function storeTheValues() {
    const dobSum = getSum(dateOfBday.value);
    const luckyNumberValue = luckyNumber.value;
    if (dobSum && luckyNumberValue) {
        checktheluck(dobSum, luckyNumberValue);
    } else {
        outputMsg.innerHTML = "Please fill the details 🙄";
    }
}

function getSum(date) {
    const dateArray = date.split("-");
    let sum = 0;
    dateArray.forEach(element => {
        sum += addDigit(Number(element));
    });
    return Number(sum);
}

function addDigit(ele) {
    let digiSum = 0;
    while (ele != 0) {
        digiSum += ele % 10;
        ele = Math.floor(ele / 10);
    }
    return (digiSum);
}

function checktheluck(dob, luckyno) {
    if (dob % luckyno == 0) {
        outputMsg.innerHTML = "🥳 Wohoo your bday is lucky 🎈";
    }
    else {
        outputMsg.innerHTML = "Not lucky 😮, koi na luck doesnt define your success 🤗";
    }
}

checkButton.addEventListener('click', storeTheValues);