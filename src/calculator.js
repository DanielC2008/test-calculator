"use strict";
var first;
var second;
var operation;


function add(x, y) {
 return x + y;
}

function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}

function divide(x, y) {
	return x / y;
}

function square(x) {
	return Math.pow(x, 2);
}

function squareRoot(x) {
	return Math.sqrt(x);
}

$(".button").click(function() {
	first = $("#input").val();
	$("#input").val("");
	operation = this.id;
});

$("#input").keypress(function(e){
	if(e.which == 13) {
		second = $("#input").val();
		runOp();
	}
});


var runOp = function() {
	if(operation === "add") {
		$("#input").val(add(parseInt(first), parseInt(second)));
	}
	else if(operation === "sub") {
		$("#input").val(subtract(parseInt(first), parseInt(second)));
	}
	else if(operation === "mul") {
		$("#input").val(multiply(parseInt(first), parseInt(second)));
	}
	else if(operation === "div") {
		$("#input").val(divide(parseInt(first), parseInt(second)));
	}
	else if(operation === "sqr") {
		$("#input").val(square(parseInt(second)));
	}
	else if(operation === "sqrt") {
		$("#input").val(squareRoot(parseInt(second)));
	}
};