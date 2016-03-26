describe('CalculatorController tests', function(){
    'use strict';

    var $scope;

    beforeEach(module('app'));
    beforeEach(inject(function($controller, $rootScope){
        $scope = $rootScope.$new();
        $controller('CalculatorController', {$scope: $scope});
    }));

    describe('factorial', function(){
        it('should return 1 for 0!', function(){
            // given when then
            expect(factorial(0)).toBe(1);
        });

        it('should return 1 for 1!', function(){
            // given when then
            expect(factorial(1)).toBe(1);
        });

        it('should calculate factorial', function(){
            // given when then
            expect($scope.factorial(5)).toBe(120);
        });

        it('should throw error for negative numbers', function(){
            // given when then
            expect(function(){
                $scope.factorial(-1);
            }).toThrow(new Error('negative number'));
        });

        it('should throw error for not a number', function(){
            // given when then
            expect(function(){
                $scope.factorial('not-a-number');
            }).toThrow(new Error('not a number'));
        });
    });

    describe('division', function(){
        it('should return 2 for 10/2', function(){
            // given
            var a = 10, b = 5, result;
            result = $scope.divide(a,b);
            // then
            expect(result).toBe(2);
        });

        it('should throw error for division by 0', function(){
            // given
            var a = 10, b = 0;
            // when then
            expect(function(){
                $scope.divide(a,b);
            }).toThrow(new Error('division by 0'));
        });

        it('should throw error when a least one argument is not a number', function(){
            // given
            var a = 10, b = 'not-a-number';
            // when then
            expect(function(){
                $scope.divide(a,b);
            }).toThrow(new Error('invalid args'));
        });
    });
});