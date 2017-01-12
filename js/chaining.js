var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

function compareNumbers(a, b) {
  return a - b;
}

function add(a, b) {
    return a + b;
}

function rmvLrgNumbers (integers) {
	if (integers<19) {
		return integers;
	}
};

function mulSub (integers) {
	// for (var i = 0; i < integers.length; i++) {
		return integers*1.5-1

	}
// }

// //sorting numbers
// integers = integers.sort(compareNumbers).reverse().filter(rmvLrgNumbers)


// console.log(integers);



// //Math
// mulSub();



// //adding an array
// integers = integers.reduce(add, 0);
// console.log(integers);







//Single line of code
integers = integers.sort(compareNumbers).reverse().filter(rmvLrgNumbers).map(mulSub).reduce(add, 0);

console.log(integers)



