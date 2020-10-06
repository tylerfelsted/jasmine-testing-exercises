let inputs = {};
let output = '';

window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	inputs = { amount: 1000, years: 2, rate: 0.05 };
	output = document.getElementById('monthly-payment');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	document.getElementById('loan-amount').value = inputs.amount;
	document.getElementById('loan-years').value = inputs.years;
	document.getElementById('loan-rate').value = inputs.rate;
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	inputs = getCurrentUIValues();
	updateMonthly(calculateMonthlyPayment(inputs));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let P = values.amount;
	let n = values.years * 12;
	let i = values.rate / 100 / 12;
	let monthlyPayment = 0;
	if (i === 0) {
		monthlyPayment = P / n;
		console.log(P);
		console.log('i does equal 0. monthlyPayment: ' + monthlyPayment);
	} else {
		monthlyPayment = P * i / (1 - Math.pow(1 + i, -n));
		console.log('i does not equal 0. monthlyPayment: ' + monthlyPayment);
	}
	return String(monthlyPayment.toFixed(2));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	output.innerText = monthly;
}
