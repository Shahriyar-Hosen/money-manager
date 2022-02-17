   // Input  To Value Function
function getInputValue(inputId) {
    let input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    input.value = ""
    return inputValue
}
//  Inner Text to Numbar Function 
function getInnerText(textId) {
    const balanceText = document.getElementById(textId);
    const textToNumbar = parseFloat(balanceText.innerText);
    return textToNumbar
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    // Income Input
    const incomeInput = getInputValue('income-input');

    // Food Input 
    const foodInput = getInputValue('food-input');
    
    // Rent Input 
    const rentInput = getInputValue('rent-input');

    // Clothes Input 
    const clothesInput = getInputValue('clothes-input');

    // Total Expenses
    const sumExpenses = foodInput + rentInput + clothesInput;
    const totalExpenses = document.getElementById('total-expenses').innerText = sumExpenses;

    // Balance Total 
    const balanceTotal = incomeInput - totalExpenses;
    const balance = document.getElementById('balance').innerText = balanceTotal;
    

    // let totalExpensesNum = getInnerText('total-expenses');

});