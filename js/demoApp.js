/*globals angular*/

(function () {
    'use strict';

    var step5RouteProvider = function ($routeProvider) {
        $routeProvider
            .when('/phones', {
                templateUrl: '/step5/phoneList.html',
                controller: 'StepFiveListCtrl'
            })
            .when('/phone/:phoneId', {
                templateUrl: '/step5/phoneDetail.html',
                controller: 'StepFiveDetailCtrl'
            })
            .otherwise({
                redirectTo: '/phones'
            });

    };

    angular.module('demoApp', ['ngRoute']);
}());