const apiURL = "https://open.er-api.com/v6/latest/USD";

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

let rates = {};


fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
        rates = data.rates;

        for (let currency in rates) {
            let option1 = document.createElement("option");
            let option2 = document.createElement("option");

            option1.value = option2.value = currency;
            option1.text = option2.text = currency;

            fromCurrency.appendChild(option1);
            toCurrency.appendChild(option2);
        }

        fromCurrency.value = "USD";
        toCurrency.value = "NGN";
    });

function convertCurrency() {
    const amount = document.getElementById("amount").value;

    const from = fromCurrency.value;
    const to = toCurrency.value;

    const result = (amount / rates[from]) * rates[to];

    document.getElementById("result").innerText =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}