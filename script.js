document
.querySelector('#update_income') 
.addEventListener ('click', updateBudget);

document.querySelector('#add_expense').addEventListener('click', addExpense);

let monthlyBudget = document.querySelector ('#monthly_budget');
let incomeInput = document.querySelector ('#income_input');
let remainingBalance = document.querySelector ('#remaining_balance');
let amountInput = document.querySelector ('#amount_input');
let nameInput = document.querySelector ('#name_input');
let expenseList = document.querySelector ('#expense_list');
let totalExpenses = document.querySelector ('#total_expenses');

let monthlyIncome = 0;
let expenses = [];
let expenseTotal = 0;
let balance = 0;

function updateBudget (event) {
    event.preventDefault ();
    //assigning the monthlyBudget variable to the value of the income input
    monthlyIncome = incomeInput.value;
    //setting the inner text of the monthlyBudget element to $monthlyIncome
    monthlyBudget.innerText = '$' + monthlyIncome;
    incomeInput.value = '';
    //call our updateBalance function
    updateBalance ();
    
}

function updateBalance () {
    //reassign balance variable to monthly income - all expenses
    balance = monthlyIncome - expenseTotal;
    //setting the inner text of our remainingBalance variable to $balance
    remainingBalance.innerText = '$' + balance;
    if (balance < 0){
        remainingBalance.classList.remove('green');
        remainingBalance.classList.add('red');

    } else {
        remainingBalance.classList.remove('red');
        remainingBalance.classList.add ('green');
    }
}

function addExpense (event){
    event.preventDefault();
    // creating an object with our expense name and amount
    let expense = {
        expenseName: nameInput.value,
        expenseAmount: amountInput.value
    };
    // creating a variable named newExpense, and assigning it to a new p element
    let newExpense = document.createElement ('p');
    // setting the inner text of our new expense element to expenseName:$expenseAmount
    newExpense.innerText = expense.expenseName + ': $' + expense.expenseAmount;
    // adding a new child (newExpense) to our expense list
    expenseList.appendChild(newExpense);
    // reassigning expenseAmount to the value of our amountInput and turning it into a number
    expenseAmount = parseInt(amountInput.value);
    // add our expenseAmount to the expenses array or "list"
    expenses.push(expenseAmount);
    nameInput.value = '';
    amountInput.value = '';
    updateExpenseTotal();
}
function updateExpenseTotal () {
    expenseTotal = 0;
    for (let i = 0; i < expenses.length; i ++) {
        // reassigning expenseTotal 
        // to be equal to expenseTotal + expenses[i]
        // expenses[i] is the location we are in the array
        expenseTotal += expenses[i];
    }
    totalExpenses.innerText = '$' + expenseTotal;
    updateBalance ();
}