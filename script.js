function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
}

function calculate() {
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let value = document.getElementById('result').value;
    document.getElementById('result').value = value.substr(0, value.length - 1);
}
