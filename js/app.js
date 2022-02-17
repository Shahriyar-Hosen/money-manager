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

    if ((foodInput > 0) && (rentInput > 0) && (clothesInput > 0)) {
        const total = foodInput + rentInput + clothesInput;
        document.getElementById('total-expenses').innerText = total
        return total
    }
    else {
        alert("Please enter the number of 'Expenses inputs' which is greater than zero And 'Expenses' less than 'Income'")
    }
}

// Minus Function 
function getMimus(num1, num2) {
    const minusValue = num1 - num2;
    return minusValue
}

// Saveing Function
function getSave(incomeId, saveId) {
    const incomeInput = getInputValue(incomeId);
    const saveInput = getInputValue(saveId);

    if (incomeInput > 0 && saveInput > 0) {
        const save = (incomeInput / 100) * saveInput;
        document.getElementById('saving-amount').innerText = save
        return save
    }
}

// Money Calculation 
document.getElementById('calculate-btn').addEventListener('click', function () {
    // Total Expenses
    const sumExpenses = expensesTotal('food-input', 'rent-input', 'clothes-input');
    const incomeInput = getInputValue('income-input');
    
    // Balance Total 
    if (incomeInput > 0 && incomeInput > sumExpenses) {
        const balanceTotal = getMimus(incomeInput, sumExpenses) ;
      document.getElementById('balance').innerText = balanceTotal
    }
    else {
        alert("Please enter the number of  'Income input' which is greater than zero And 'Expenses' less than 'Income'")
    }
});

// Saving And Remaining Amount 
document.getElementById('save-btn').addEventListener('click', function () {
    // Saving Amount
    const saving = getSave('income-input', 'save-input');
    // Balance Amount
    const balance = getInnerText('balance');

    // Remaining Balance
    if (saving < balance) {
    if (saving > 0 && balance > 0){
        const remainingBalance = getMimus(balance, saving);
    
        document.getElementById('remaining-balance').innerText = remainingBalance
        }
    }
    else {
        alert("There is not enough money for shaving. Please enter the number of 'save Percentage input' which is greater than zero And 'Saving Amount' will be smaller than 'Balance'")
    }
})