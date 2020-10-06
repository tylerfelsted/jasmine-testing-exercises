const testValues1 = { amount: 1000, years: 2, rate: 5 };
const testValues2 = { amount: 5000, years: 5, rate: 0 };
const testValues3 = { amount: 7891.89, years: 3, rate: 4 };

it('should calculate the monthly payment correctly', function() {
	expect(calculateMonthlyPayment(testValues1)).toEqual('43.87');
});

it('should handle an interest rate of 0', function() {
	expect(calculateMonthlyPayment(testValues2)).toEqual('83.33');
});

it('should return a result with 2 decimal places', function() {
	expect(calculateMonthlyPayment(testValues3)).toEqual('233.00');
});

/// etc
