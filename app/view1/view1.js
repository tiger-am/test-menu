(function () {
    'use strict';

    function MenuCtrl($scope, $http, $filter, dataService) {
        $scope.cols = ['title', 'image', 'rating', 'price'];
        $scope.isDesc = false;
        $scope.loading = true;

            dataService.getMenu().then(function (data) {
                $scope.menu = data;
                $scope.loading = false;
            });

        $scope.orderProp = 'title';
        $scope.orderCol = function (prop) {
            if ($scope.orderProp === prop) {
                $scope.isDesc = !$scope.isDesc;
            } else {
                $scope.isDesc = false;
            }

            $scope.orderProp = prop;
        };
    }

    angular.module('myApp.view1', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view1', {
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl',
            });
        }])
        .filter('filter', )

        .controller('View1Ctrl', ['$scope', '$http', '$filter', 'dataService', MenuCtrl]);
})();