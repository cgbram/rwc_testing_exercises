angular.module('app').controller('CalculatorController', function($scope){
    'use strict';

    $scope.factorial = function(n){
     	if (n < 0){
     		throw new Error('negative number');
     	}
     	if(isNaN(n)){
     		throw new Error('not a number');
     	}
     	if (n === 0){
     		return 1;
     	}
     	return n * $scope.factorial(n-1);
    };

    $scope.divide = function(a, b){
    	if(isNaN(a) || isNaN(b)){
    		throw new Error('invalid args');
    	}
    	if (b === 0){
    		throw new Error('division by 0');
    	}
		return a / b;
    };
});