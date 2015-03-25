"use strict";

angular.module('gordonApp.face').directive("mouth", function() {
    return {
    	scope: {
    		isolatedSentence: '=sentence'
    	},
        restrict: "E",
        template: "<div>{{isolatedSentence}}</div>",
    }
});
