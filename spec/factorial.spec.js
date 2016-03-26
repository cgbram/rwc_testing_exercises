describe('factorial function tests', function() {
	  'use strict';

	  it('should return 1 for 0!', function(){
	    // given when then
        expect(factorial(0)).toBe(1);
	  });

	  it('should return 1 for 1!', function(){
	    // given when then
	    expect(factorial(1)).toBe(1);
   	  });

   	  it('should return 24 for 4!', function(){
   	    // given when then
   	    expect(factorial(4)).toBe(24);
   	  });

	  it('should return 120 for 5!', function(){
	    // given when then
	    expect(factorial(5)).toBe(120);
	  });

	  it('should throw error for negative numbers', function(){
	    // given when then
	    expect(function(){
            factorial(-1);
	    }).toThrow(new Error('negative number'));
	  });

	  it('should throw error for not a number arugment', function(){
	    // given when then
	    expect(function(){
	        factorial('not a number');
	    }).toThrow(new Error('not a number'));
	  });
});