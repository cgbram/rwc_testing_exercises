angular.module('app').factory('sampleService', function(){
    'use strict';

    var data = [1,2,3];

    return {
        getData: function(){
            return data;
        }
    };
});