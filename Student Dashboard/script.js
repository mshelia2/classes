
const schoolName = "TechMinds Academy";
const currency = "₦";


const formatMoney = amount =>
    `${currency}${Number(amount).toLocaleString()}`;

const getDate = () =>
    new Date().toLocaleDateString();

const generateReference = () =>
    "TXN" + Math.floor(Math.random() * 1000000);



const processPayment = callback => {
    callback();
};


const showReceipt = () => {


    const name = document.getElementById("name").value;
    const studentClass = document.getElementById("studentClass").value;
    const amount = document.getElementById("amount").value;
    const purpose = document.getElementById("purpose").value;

    if(name === "" || amount === ""){
        alert("Please complete all fields.");
        return;
    }

    document.getElementById("formSection").style.display = "none";

    document.getElementById("receiptSection").classList.remove("hidden");

    document.getElementById("displayName").textContent =
        "Student: " + name;

    document.getElementById("displayClass").textContent =
        "Class: " + studentClass;

    document.getElementById("displayAmount").textContent =
        "Payment Amount: " + formatMoney(amount);

    document.getElementById("displayPurpose").textContent =
        "Purpose: " + purpose;

    document.getElementById("displayStatus").textContent =
        "Payment Status: Paid";

    document.getElementById("displayDate").textContent =
        "Payment Date: " + getDate();

    document.getElementById("displayReference").textContent =
        "Reference: " + generateReference();

};



document.getElementById("reviewBtn").addEventListener("click", () => {

    document.getElementById("reviewBtn").textContent =
        "Processing Payment...";

    setTimeout(() => {

        document.getElementById("reviewBtn").textContent =
            "Review Payment";

        processPayment(showReceipt);

    },2000);

});



document.getElementById("newPaymentBtn").addEventListener("click", () => {

    document.getElementById("receiptSection").classList.add("hidden");

    document.getElementById("formSection").style.display = "block";

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("studentClass").selectedIndex = 0;
    document.getElementById("purpose").selectedIndex = 0;

});