var factorial = function(n){
	if (n < 0){
		throw new Error('negative number');
	}
	if(isNaN(n)){
		throw new Error('not a number');
	}
	if (n === 0){
		return 1;
	}
	return n * factorial(n-1);
}