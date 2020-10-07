describe('helpers tests', function() {
	beforeEach(function() {
		billAmtInput.value = 100;
		tipAmtInput.value = 15;
		submitPaymentInfo();
		billAmtInput.value = 30;
		tipAmtInput.value = 6;
		submitPaymentInfo();
	});

	it('should accurately calculate the tip percent', function() {
		expect(calculateTipPercent(100, 15)).toEqual(15);
		expect(calculateTipPercent(30, 6)).toEqual(20);
	});

	it('should properly handle a tip amount of 0', function() {
		expect(calculateTipPercent(100, 0)).toEqual(0);
	});

	it('should accurately sum payments', function() {
		expect(sumPaymentTotal('billAmt')).toEqual(130);
		expect(sumPaymentTotal('tipAmt')).toEqual(21);
		expect(sumPaymentTotal('tipPercent')).toEqual(35);
	});

	// it('should append columns to the new row', function() {});

	afterEach(function() {
		allPayments = {};
		paymentId = 0;
		paymentTbody.innerHTML = '';
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
	});
});
