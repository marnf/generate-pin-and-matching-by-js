// set the pin-------------------------
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin()
    }
}

// generate the pin----------------
function generatePin() {

    const random = Math.round(Math.random() * 10000);
    return random;
}

// set innerText-------------------------
function setTheInnerText(inputId, setInnerTextId) {
    const innerTextOfInputField = document.getElementById(inputId);
    innerTextOfInputField.value = setInnerTextId;

}

document.getElementById('generate-pin-btn').addEventListener('click', function () {
    const pin = getPin()
    setTheInnerText('display-center', pin)
})


document.getElementById('calculator').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const previousTypedNumber = typeNumberField.value;

    if (isNaN(number)) {

        if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop('');
            const remainingDigits = digits.join('')
            typeNumberField.value = remainingDigits;
        }
        else {
            typeNumberField.value = '';
        }
    }
    else {

        const newTypeNumber = previousTypedNumber + number;
        typeNumberField.value = newTypeNumber;

    }

})

document.getElementById('submit-btn').addEventListener('click', function () {

    const successBar = document.getElementById('success')
    const nonSuccessBar = document.getElementById('not-success')

    const displayPinField = document.getElementById('display-center');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('type-numbers');
    const typeNumberFieldValue = typeNumberField.value;


    if (currentPin === typeNumberFieldValue) {
        successBar.style.display = 'block'
    }
    else {
        nonSuccessBar.style.display = 'block'
    }

})