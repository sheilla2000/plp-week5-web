// ===============================
// 2. Store Application Data
// ===============================
let userName = "";
let monthlyBudget = 0;
let rentExpense = 0;
let foodExpense = 0;
let transportExpense = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// ===============================
// 3. Collect User Input
// ===============================
userName = prompt("Welcome to SpendWise! What is your name?");
monthlyBudget = parseFloat(prompt(`Hi ${userName}, Enter your total monthly budget (KES):`));
rentExpense = parseFloat(prompt("Enter your rent expense:"));
foodExpense = parseFloat(prompt("Enter your food expense:"));
transportExpense = parseFloat(prompt("Enter your transport expense:"));

// Validate inputs
if (isNaN(monthlyBudget) || isNaN(rentExpense) || isNaN(foodExpense) || isNaN(transportExpense)) {
    alert("Please enter valid numbers only!");
}

// ===============================
// 5. Create Reusable Functions
// ===============================
function calculateTotalExpenses(rent, food, transport) {
    return rent + food + transport;
}

function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

function getBudgetStatus(balance) {
    if (balance > 0) return "You are within budget. Great job!";
    if (balance === 0) return "You have used exactly your budget.";
    return "You have exceeded your budget!";
}

function displayResults() {
    // Requirement 4: Perform Budget Calculations
    totalExpenses = calculateTotalExpenses(rentExpense, foodExpense, transportExpense);
    remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
    const status = getBudgetStatus(remainingBalance);

    // Requirement 6: Display Results in Browser Console
    console.log("===== SpendWise Budget Report =====");
    console.log(`User: ${userName}`);
    console.log(`Monthly Budget: KES ${monthlyBudget}`);
    console.log(`Rent: KES ${rentExpense}`);
    console.log(`Food: KES ${foodExpense}`);
    console.log(`Transport: KES ${transportExpense}`);
    console.log("-----------------------------------");
    console.log(`Total Expenses: KES ${totalExpenses}`);
    console.log(`Remaining Balance: KES ${remainingBalance}`);
    console.log(`Status: ${status}`);
    console.log("===================================");

    // Also show on page
    document.getElementById("output").innerHTML = `
        <h3>Budget Report for ${userName}</h3>
        <p><strong>Total Budget:</strong> KES ${monthlyBudget}</p>
        <p><strong>Total Expenses:</strong> KES ${totalExpenses}</p>
        <p><strong>Remaining:</strong> KES ${remainingBalance}</p>
        <p><em>${status}</em></p>
        <p>Check browser console (F12) for detailed log.</p>
    `;
}

// Run the app
displayResults();