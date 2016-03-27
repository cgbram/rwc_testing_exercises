describe('secondSampleService tests', function(){
    'use strict';

    var secondSampleService, serviceMock = {
        getData: function(){
            return [1,2,3];
        }
    };

    beforeEach(function(){
        module('app');
        module(function($provide){
            $provide.value('sampleService', serviceMock);
        });
    });
    beforeEach(inject(function(_secondSampleService_){
        secondSampleService = _secondSampleService_;
    }));

    it('should get data', function(){
        // given
        var data = [];
        // when
        data = secondSampleService.getData();
        // then
        expect(data.length).toBe(3);
        expect(data[0]).toBe(1);
        expect(data[1]).toBe(2);
        expect(data[2]).toBe(3);
    });
});