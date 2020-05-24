"use strict";

angular.module('app.page')
    .component('myModal', {
        templateUrl: 'modal/modal.html',
        bindings: {
            modalInstance: "<",
            resolve: "<"
        },
        controller: ['$scope', function ($scope) {
            this.$onInit = function () {
                $scope.ingredients = this.resolve.modalData.ingredients;
                $scope.title = this.resolve.modalData.title;
                $scope.image = this.resolve.modalData.image;
            };

            $scope.handleClose = function () {
                this.modalInstance.close();
            };

            this.$onInit = this.$onInit.bind(this);
            $scope.handleClose = $scope.handleClose.bind(this);
        }]
    });
