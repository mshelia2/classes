
const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPercentage');
const people = document.getElementById('people');

const calculateBtn = document.getElementById('calculateTip');

const tipAmount = document.getElementById('tipAmount');
const totalBill = document.getElementById('totalBill');
const perPerson = document.getElementById('perPerson');


calculateBtn.addEventListener('click', function () {
   
    const bill = Number(billAmount.value);
    const tip = Number(tipPercentage.value);
    const numberOfPeople = Number(people.value) || 1; 

    if (isNaN(bill) || bill <= 0) {
       
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

    
    tipAmount.style.color = '';

    
    const tipValue = bill * (tip / 100); 
    const total = bill + tipValue;
    const eachPerson = total / numberOfPeople;

                         
    tipAmount.textContent = `$${tipValue.toFixed(2)}`;
    totalBill.textContent = `$${total.toFixed(2)}`;
    perPerson.textContent = `$${eachPerson.toFixed(2)}`;
});


/                                                   
const display = document.getElementById('display');
const buttonsContainer = document.querySelector('.calculator-buttons');

let expression = '';


function updateDisplay(value) {
    
    if (display.tagName === 'INPUT' || display.tagName === 'TEXTAREA') {
        display.value = value;
    } else {
        display.textContent = value;
    }
}


updateDisplay('');


buttonsContainer.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const txt = btn.textContent.trim();

    
    if (btn.classList.contains('clear')) {
        expression = '';
        updateDisplay('');
        display.style.color = '';
        return;
    }

   
    if (btn.classList.contains('delete')) {
        expression = expression.slice(0, -1);
        updateDisplay(expression);
        return;
    }

    
    if (btn.classList.contains('equals')) {
        if (!expression) return;
        
        if (/[+\-*/.%]$/.test(expression)) {
            display.style.color = 'red';
            updateDisplay('Error');
            expression = '';
            return;
        }

        try {
           
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


    if (btn.classList.contains('operator')) {
        const last = expression.slice(-1);
       
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

   
    if (txt === '.') {
        const parts = expression.split(/[+\-*/%]/);
        const current = parts[parts.length - 1];
        if (current.includes('.')) return; // already has a dot
        expression += '.';
        updateDisplay(expression);
        return;
    }

   
    expression += txt;
    updateDisplay(expression);
});