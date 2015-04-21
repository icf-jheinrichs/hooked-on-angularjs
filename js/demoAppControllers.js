/*globals angular*/

(function () {
    'use strict';

    var StepTwoCtrl = function ($scope) {
            $scope.phoneList = [
                {
                    'name' : 'iPhone 6',
                    'snippet' : 'snippet'
                }
            ];
        },

        StepThreeCtrl = function ($scope, $http) {
            $http.get('/json/phones.json').success(function (data) {
                $scope.phoneList = data;
            });
        },

        StepFourCtrl = function ($scope, $http) {
            $http.get('/json/phones.json').success(function (data) {
                $scope.phoneList = data;
            });

            $scope.orderProp = 'name';
            $scope.query    = '';
        },

        StepFiveListCtrl = function ($scope, $rootScope, $http) {
            $http.get('/json/phones.json').success(function (data) {
                $rootScope.phoneList = $scope.phoneList = data;
            });

            $scope.orderProp = 'name';
        },

        StepFiveDetailCtrl = function ($scope, $rootScope, $routeParams) {
            $scope.phoneId = $routeParams.phoneId;
            $scope.phones = $rootScope.phones;
        };

    angular.module('demoApp').controller('StepTwoCtrl', ['$scope', StepTwoCtrl])
                             .controller('StepThreeCtrl', ['$scope', '$http', StepThreeCtrl])
                             .controller('StepFourCtrl', ['$scope', '$http', StepFourCtrl])
                             .controller('StepFiveListCtrl', ['$scope', '$rootScope', '$http', StepFiveListCtrl])
                             .controller('StepFiveDetailCtrl', ['$scope', '$rootScope', '$routeParams', StepFiveDetailCtrl]);
}());