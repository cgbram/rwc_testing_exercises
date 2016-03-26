describe('SampleController tests', function(){
    'use strict';

    var $scope, locationMock = {
        path: jasmine.createSpy('pathSpy')
    };

    beforeEach(module('app'));
    beforeEach(inject(function($controller, $rootScope){
        $scope = $rootScope.$new();
        $controller('SampleController', {$scope: $scope, $location: locationMock});
    }));

    it('should call $location.path on goToDialog call', function(){
        // given
        var path = 'somePath';
        // when
        $scope.goToDialog(path);
        // then
        expect(locationMock.path).toHaveBeenCalledWith(path);
    });
});