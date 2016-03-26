angular.module('app').factory('secondSampleService', function($http){
    'use strict';

    return {
        getData: function(){
            return $http.get('someUrl');
        }
    };

});