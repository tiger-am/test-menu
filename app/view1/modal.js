"use strict";

angular.module('myApp.view1')
    .component('myModal', {
        templateUrl: 'view1/modal.html',
        bindings: {
            modalInstance: "<",
            resolve: "<"
        },
        controller: ['$scope',function($scope) {
            this.$onInit = function() {
                $scope.ingredients = this.resolve.modalData.ingredients;
                $scope.title = this.resolve.modalData.title;
            };

            $scope.handleClose = function() {
                this.modalInstance.close();
            };

            this.$onInit = this.$onInit.bind(this);
            $scope.handleClose = $scope.handleClose.bind(this);
        }]
    });