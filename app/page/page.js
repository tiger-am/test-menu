(function () {
    'use strict';

    angular.module('app.page', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/page', {
                templateUrl: 'page/page.html',
                controller: 'PageCtrl',
            });
        }])
        .controller('PageCtrl', ['$uibModal', '$scope', 'dataService', 'localStorageService', menuCtrl]);

    function menuCtrl($uibModal, $scope, dataService, localStorageService) {
        $scope.cols = ['title', 'image', 'rating', 'price'];
        $scope.params = localStorageService.getMenuData();
        $scope.isDesc = false;
        $scope.loading = true;
        $scope.orderProp = 'none';
        $scope.isActiveFilters = false;

        dataService.getMenu().then(function (data) {
            $scope.menu = data;
            $scope.loading = false;
        });

        $scope.orderCol = function (prop) {
            if ($scope.orderProp === prop) {
                $scope.isDesc = !$scope.isDesc;
            } else {
                $scope.isDesc = false;
            }

            $scope.orderProp = prop;

            $scope.updateStorage();
        };

        $scope.openModal = function (id) {
            $uibModal
                .open({
                    component: "myModal",
                    resolve: {
                        modalData: function () {
                            var idx = $scope.menu.findIndex(function (item) {
                                return item.id === id;
                            });

                            return $scope.menu[idx];
                        }
                    }
                }).result.then(function () {
                }, function () {
                }
            );
        };

        $scope.updateStorage = function () {
            $scope.isActiveFilters =
                !!$scope.query.$ ||
                !!$scope.query.title ||
                !!$scope.query.image ||
                !!$scope.query.rating ||
                !!$scope.query.price;

            $scope.params = {
                isDesc: $scope.isDesc,
                orderProp: $scope.orderProp,
                query: $scope.query
            };
            localStorageService.setMenuData($scope.params);
        };

        $scope.resetFilter = function () {
            $scope.query = {
                $: '',
                title: '',
                image: '',
                rating: '',
                price: ''
            };
            $scope.updateStorage();
        };

        return {
            $onInit: function () {
                if (!$scope.params) {
                    $scope.query = {
                        $: '',
                        title: '',
                        image: '',
                        rating: '',
                        price: ''
                    };
                    $scope.updateStorage();
                } else {
                    $scope.isDesc = $scope.params.isDesc;
                    $scope.orderProp = $scope.params.orderProp;
                    $scope.query = $scope.params.query;
                    $scope.isActiveFilters =
                        !!$scope.query.$ ||
                        !!$scope.query.title ||
                        !!$scope.query.image ||
                        !!$scope.query.rating ||
                        !!$scope.query.price;
                }
            }
        };
    }
})();
