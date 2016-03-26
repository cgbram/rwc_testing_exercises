describe('sampleService test', function(){
    'use strict';

    var sampleService;

    beforeEach(module('app'));
    beforeEach(inject(function(_sampleService_){
        sampleService = _sampleService_;
    }));

    it('should return data', function(){
        // given
        var data = [];
        // when
        data = sampleService.getData();
        // then
        expect(data.length).toBe(3);
    });
});