angular.module('app').factory('secondSampleService', function(sampleService){
    'use strict';

    return {
        getData: function(){
            return sampleService.getData();
        }
    };

});