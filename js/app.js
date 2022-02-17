// Input  To Value Function
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    return inputValue
}

//  Inner Text to Numbar Function 
function getInnerText(textId) {
    const textFild = document.getElementById(textId);
    const textToNumbar = parseFloat(textFild.innerText);
    return textToNumbar
}

    // Expenses Input  And Sum
function expensesTotal(food, rent, clothes) {
    const foodInput = getInputValue(food);
    const rentInput = getInputValue(rent);
    const clothesInput = getInputValue(clothes);

    const total = foodInput + rentInput + clothesInput;
    document.getElementById('total-expenses').innerText = total;
    return total
}

// Minus Function 
function getMimus(num1, num2) {
    const minusValue = num1 - num2;
    return minusValue
}

// Saveing Function\
function getSave(incomeId, saveId) {
    const incomeInput = getInputValue(incomeId);
    const saveInput = getInputValue(saveId);
    const save = incomeInput / saveInput;
    document.getElementById('saving-amount').innerText = save
    return save
}

// Money Calculation 
document.getElementById('calculate-btn').addEventListener('click', function () {
    // Total Expenses
    const sumExpenses = expensesTotal('food-input', 'rent-input', 'clothes-input');

    // Balance Total 
    const balanceTotal = getMimus(getInputValue('income-input'), sumExpenses) ;
   document.getElementById('balance').innerText = balanceTotal
});

// Saving And Remaining Amount 
document.getElementById('save-btn').addEventListener('click', function () {
    // Saving Amount
    const saving = getSave('income-input', 'save-input');
    
    // Remaining Balance
    const remainingBalance = getMimus(getInnerText('balance'), saving);
    document.getElementById('remaining-balance').innerText = remainingBalance
})