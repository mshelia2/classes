/*
  Beginner-friendly DOM-based JavaScript to match the HTML/CSS.
  Uses: getElementById, querySelector, textContent/innerHTML, element.style
*/

// -------------------------------
// Tip Calculator (DOM operations)
// -------------------------------
// Selecting elements from the page (how JS sees the HTML)
const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPercentage');
const people = document.getElementById('people');

const calculateBtn = document.getElementById('calculateTip');

const tipAmount = document.getElementById('tipAmount');
const totalBill = document.getElementById('totalBill');
const perPerson = document.getElementById('perPerson');

// Click handler: read values, validate, compute and update the DOM
calculateBtn.addEventListener('click', function () {
    // Read values from inputs
    const bill = Number(billAmount.value);
    const tip = Number(tipPercentage.value);
    const numberOfPeople = Number(people.value) || 1; // default to 1 person

    // Validate using comparison and logical operators
    if (isNaN(bill) || bill <= 0) {
        // Change text and style to show an error (using element.style)
        tipAmount.textContent = '$0.00';
        totalBill.textContent = '$0.00';
        perPerson.textContent = '$0.00';
        tipAmount.style.color = 'red';
        tipAmount.innerHTML = 'Enter a valid bill';
        return;
    }

    if (isNaN(tip) || tip < 0) {
        tipAmount.textContent = '$0.00';
        totalBill.textContent = '$0.00';
        perPerson.textContent = '$0.00';
        tipAmount.style.color = 'red';
        tipAmount.innerHTML = 'Enter a valid tip';
        return;
    }

    if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
        tipAmount.textContent = '$0.00';
        totalBill.textContent = '$0.00';
        perPerson.textContent = '$0.00';
        tipAmount.style.color = 'red';
        tipAmount.innerHTML = 'Enter people &gt; 0';
        return;
    }

    // Clear any previous error style
    tipAmount.style.color = '';

    // ARITHMETIC OPERATORS: calculate tip and total
    const tipValue = bill * (tip / 100); // * and /
    const total = bill + tipValue; // +
    const eachPerson = total / numberOfPeople;

    // Update the page using textContent (safe) and template literals
    tipAmount.textContent = `$${tipValue.toFixed(2)}`;
    totalBill.textContent = `$${total.toFixed(2)}`;
    perPerson.textContent = `$${eachPerson.toFixed(2)}`;
});


// -------------------------------
// Basic Calculator (buttons grid)
// -------------------------------
// Select display and buttons container
const display = document.getElementById('display');
const buttonsContainer = document.querySelector('.calculator-buttons');

let expression = '';

// Helper: update the display (shows current expression or result)
function updateDisplay(value) {
    // If the display is an <input>, set value; otherwise use textContent
    if (display.tagName === 'INPUT' || display.tagName === 'TEXTAREA') {
        display.value = value;
    } else {
        display.textContent = value;
    }
}

// Start with 0
updateDisplay('');

// Listen for clicks on the buttons container
buttonsContainer.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const txt = btn.textContent.trim();

    // Clear button
    if (btn.classList.contains('clear')) {
        expression = '';
        updateDisplay('');
        display.style.color = '';
        return;
    }

    // Delete last character
    if (btn.classList.contains('delete')) {
        expression = expression.slice(0, -1);
        updateDisplay(expression);
        return;
    }

    // Equals: evaluate expression
    if (btn.classList.contains('equals')) {
        if (!expression) return;
        // Prevent trailing operator
        if (/[+\-*/.%]$/.test(expression)) {
            display.style.color = 'red';
            updateDisplay('Error');
            expression = '';
            return;
        }

        try {
            // Use Function to evaluate (simple and readable for students)
            const result = Function(`return ${expression}`)();
            if (!isFinite(result)) throw new Error('Math error');
            updateDisplay(String(result));
            expression = String(result);
        } catch (err) {
            display.style.color = 'red';
            updateDisplay('Error');
            expression = '';
        }
        return;
    }

    // Operator buttons (%, /, *, -, +)
    if (btn.classList.contains('operator')) {
        const last = expression.slice(-1);
        // Prevent double operators
        if (expression === '' && /[+*/.%]/.test(txt)) return; // don't start with these
        if (/[+\-*/.%]$/.test(last)) {
            // replace last operator with new one
            expression = expression.slice(0, -1) + txt;
        } else {
            expression += txt;
        }
        updateDisplay(expression);
        return;
    }

    // Number or decimal
    // Prevent multiple decimals in the current number segment
    if (txt === '.') {
        const parts = expression.split(/[+\-*/%]/);
        const current = parts[parts.length - 1];
        if (current.includes('.')) return; // already has a dot
        expression += '.';
        updateDisplay(expression);
        return;
    }

    // Otherwise treat as number
    expression += txt;
    updateDisplay(expression);
});