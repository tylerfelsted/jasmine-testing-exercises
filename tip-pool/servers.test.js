describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	it('should not add a new server to allServers if serverNameInput is empty', function() {
		serverNameInput.value = '';

		expect(Object.keys(allServers).length).toEqual(0);
	});

	it('should add a new row to the server table on updateServerTable()', function() {
		submitServerInfo();
		updateServerTable();

		let row = document.querySelectorAll('#serverTable tbody tr td');
		expect(serverTbody.rows.length).toEqual(1);
		expect(row[0].innerText).toEqual('Alice');
		expect(row[1].innerText).toEqual('$0.00');
	});

	afterEach(function() {
		allServers = {};
		serverId = 0;
		serverTbody.innerHTML = '';
	});
});
