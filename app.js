var input = [];
var n, total;

const clear = document.getElementById('clear');
openP = document.getElementById('open-p'),
	closeP = document.getElementById('close-p'),
	div = document.getElementById('divide'),
	mult = document.getElementById('multiply'),
	subt = document.getElementById('subtract'),
	ad = document.getElementById('add'),
	point = document.getElementById('point'),
	equal = document.getElementById('equal'),

	zero = document.getElementById('0'),
	one = document.getElementById('1'),
	two = document.getElementById('2'),
	three = document.getElementById('3'),
	four = document.getElementById('4'),
	five = document.getElementById('5'),
	six = document.getElementById('6'),
	seven = document.getElementById('7'),
	eight = document.getElementById('8'),
	nine = document.getElementById('9'),

	problem = document.querySelector('.problem'),
	solved = document.querySelector('.solved');

zero.addEventListener('click', function () {
	input.push(0);
	problem.innerHTML += 0;
	checkLength();
})
one.addEventListener('click', function () {
	input.push(1);
	problem.innerHTML += 1;
	checkLength();
})
two.addEventListener('click', function () {
	input.push(2);
	problem.innerHTML += 2;
	checkLength();
})
three.addEventListener('click', function () {
	input.push(3);
	problem.innerHTML += 3;
	checkLength();
})
four.addEventListener('click', function () {
	input.push(4);
	problem.innerHTML += 4;
	checkLength();
})
five.addEventListener('click', function () {
	input.push(5);
	problem.innerHTML += 5;
	checkLength();
})
six.addEventListener('click', function () {
	input.push(6);
	problem.innerHTML += 6;
	checkLength();
})
seven.addEventListener('click', function () {
	input.push(7);
	problem.innerHTML += 7;
	checkLength();
})
eight.addEventListener('click', function () {
	input.push(8);
	problem.innerHTML += 8;
	checkLength();
})
nine.addEventListener('click', function () {
	input.push(9);
	problem.innerHTML += 9;
	checkLength();
})
openP.addEventListener('click', function () {
	input.push('(');
	problem.innerHTML += '(';
	checkLength();
})
closeP.addEventListener('click', function () {
	input.push(')');
	problem.innerHTML += ')';
	checkLength();
})
point.addEventListener('click', function () {
	input.push('.');
	problem.innerHTML += '.';
	checkLength();
})

div.addEventListener('click', function () {
	input.push('/');
	problem.innerHTML += '÷';
	checkLength();
})
mult.addEventListener('click', function () {
	input.push('*');
	problem.innerHTML += '×';
	checkLength()
})
subt.addEventListener('click', function () {
	input.push('-');
	problem.innerHTML += '-';
	checkLength();
})
ad.addEventListener('click', function () {
	input.push('+');
	problem.innerHTML += '+';
	checkLength()
})

clear.addEventListener('click', function () {
	input = [];
	problem.innerHTML = '';
	solved.innerHTML = 0;
})

equal.addEventListener('click', function () {
	n = input.join('');
	total = math.eval(n);
	solved.innerHTML = total.toFixed(2);
	checkLength();
})


function checkLength() {
	if (problem.innerHTML.length >= 30) {
		problem.innerHTML = 'Digit length reached            ';
	}
	if (solved.innerHTML.length >= 8) {
		solved.innerHTML = '0';
		problem.innerHTML = 'Digit length reached            ';
	}
}


/* Functions 

function add() {
	var i, sum = 0;
	for(i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

function subtract() {
	var i, difference = 0;
	for(i = 0; i < arguments.length; i++) {
		difference -= arguments[i];
	}
	return difference;
}

function multiply() {
	var i, product = 1;
	for(i = 0; i < arguments.length; i++) {
		product *= arguments[i];
	}
	return product;
}

function divide() {
 	return arguments[0] / arguments[1];
}

*/