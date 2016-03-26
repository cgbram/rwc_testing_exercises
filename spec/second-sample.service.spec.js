describe('secondSampleService tests', function(){
    'use strict';

    var secondSampleService, $httpBackend;

    beforeEach(module('app'));
    beforeEach(inject(function(_secondSampleService_, _$httpBackend_){
        secondSampleService = _secondSampleService_;
        $httpBackend = _$httpBackend_;
    }));

    it('should get data', function(){
        // given
        $httpBackend.whenGET('someUrl').respond([1,2,3]);
        // when
        secondSampleService.getData();
        $httpBackend.flush();
        // then
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});