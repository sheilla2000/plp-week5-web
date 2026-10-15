# SpendWise - JavaScript Foundation

## What SpendWise Does
SpendWise is a simple budgeting application that helps users track their monthly income and expenses. It calculates total expenses and remaining balance to help users stay within budget.

## Technologies Used
- HTML5
- CSS3
- JavaScript (Variables, Data Types, Prompts, Functions, Calculations)

## Setup Instructions
1. Clone this repository
2. Open `index.html` in your browser
3. The app will prompt for budget information
4. Press F12 to view console results

## How Calculations Are Performed
- Total Expenses = rent + food + transport (via `calculateTotalExpenses()`)
- Remaining Balance = monthlyBudget - totalExpenses (via `calculateRemainingBalance()`)
- Budget Status is determined based on remaining balance

## How Functions Help Organize Code
Functions make code reusable and organized:
- `calculateTotalExpenses()` - handles expense summation
- `calculateRemainingBalance()` - handles balance calculation