let display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    const result = eval(display.innerText);
    display.innerText = result;
  } catch (e) {
    display.innerText = 'Error';
  }
}
