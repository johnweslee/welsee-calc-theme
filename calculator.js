var inputDisplay = document.getElementById("calculatorDisplay");

function calculatorFunction(inputValue){
    inputDisplay.value += inputValue;
}

function resultFunction(){
    var displayExpression = inputDisplay.value;
    var displayResult = eval(displayExpression);
    inputDisplay.value = displayResult;
}

function clearAllFunction(){
    inputDisplay.value = '';
}

function backspaceFunction(){
    inputDisplay.value = inputDisplay.value.slice(0, -1);
}

const toggleThemeButton = document.querySelector('.toggleTheme');
const calculator = document.querySelector('.dark');
const toggleIcon = document.querySelector('.toggleIcon');
let isDark = true;
toggleThemeButton.onclick = ()=>{
    calculator.classList.toggle('dark');
    toggleThemeButton.classList.toggle('active');
    isDark = !isDark;
}