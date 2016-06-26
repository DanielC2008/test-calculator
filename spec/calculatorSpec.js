describe("the specification for basic math", function() {

	it("should have an add function", function() {
		expect(add).toBeDefined;
	});

	it("should add two intergers", function() {
		expect(add(2, 5)).toBe(7);
	});

	it("should have an subtract function", function() {
		expect(subtract).toBeDefined;
	});

	it("should subtract two intergers", function() {
		expect(subtract(7, 5)).toBe(2);
	});

	it("should have an multiply function", function() {
		expect(multiply).toBeDefined;
	});

	it("should multiply two intergers", function() {
		expect(multiply(2, 5)).toBe(10);
	});

	it("should have an divide function", function() {
		expect(divide).toBeDefined;
	});

	it("should divide two intergers", function() {
		expect(divide(10, 5)).toBe(2);
	});

	it("should have a square function", function() {
		expect(square).toBeDefined;
	});

	it("should square one interger", function() {
		expect(square(2, 2)).toBe(4);
	});

	it("should have a squareRoot function", function() {
		expect(squareRoot).toBeDefined;
	})

	it("should squareRoot one interger", function() {
		expect(squareRoot(25)).toBe(5);
	})




});