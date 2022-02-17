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

document.getElementById('calculate-btn').addEventListener('click', function () {
    // Income Input
    const income = getInputValue('income-input');

    // Food Input 
    const food = getInputValue('food-input');
    
    // Rent Input 
    const rent = getInputValue('rent-input');

    // Clothes Input 
    const clothes = getInputValue('clothes-input');

    // Total Expenses
    const sumExpenses = food + rent + clothes;
    
    document.getElementById('total-expenses').innerText = sumExpenses;

    // Balance Total 
    const balanceTotal = income - sumExpenses;

   document.getElementById('balance').innerText = balanceTotal
});

// Saving And Remaining Amount 
document.getElementById('save-btn').addEventListener('click', function () {
    // Income Input
    const income = getInputValue('income-input');
    // Save Input
    const saveInput = getInputValue('save-input');

    // balance Total 
    const balance = getInnerText('balance');

    const saveing = income / saveInput;

    document.getElementById('saving-amount').innerText = saveing

    // Remaining Balance
    const remainingBalance = balance - saveing;

    document.getElementById('remaining-balance').innerText = remainingBalance
})