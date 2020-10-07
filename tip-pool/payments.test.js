describe('payments tests', function() {
	beforeEach(function() {
		billAmtInput.value = 100;
		tipAmtInput.value = 15;
	});

	it('should add a new object to the allPayments object on submitPaymentInfo()', function() {
		submitPaymentInfo();
		expect(Object.keys(allPayments).length).toEqual(1);
	});

	it('should update set the payment form inputs to an empty string on submitPaymentInfo()', function() {
		submitPaymentInfo();
		expect(billAmtInput.value).toEqual('');
		expect(tipAmtInput.value).toEqual('');
	});

	it('should create an object with all payment information on createCurPayment()', function() {
		expect(createCurPayment()).toEqual({ billAmt: '100', tipAmt: '15', tipPercent: 15 });
	});

	it('should not create an object if billAmtInput.value is an empty string on createCurPayment', function() {
		billAmtInput.value = '';

		expect(createCurPayment()).toEqual();
	});

	it('should not create an object if tipAmtInput.value is an empty string on createCurPayment', function() {
		tipAmtInput.value = '';

		expect(createCurPayment()).toEqual();
	});

	afterEach(function() {
		allPayments = {};
		paymentId = 0;
		paymentTbody.innerHTML = '';
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
	});
});
