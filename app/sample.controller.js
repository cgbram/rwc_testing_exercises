angular.module('app').controller('SampleController', function($scope, $location){
    'use strict';

    $scope.goToDialog = function(path){
        $location.path(path);
    };
});