(function () {
    "use strict";

    angular.module('myApp.view1')
        .service('localStorageService', [function () {
            this.getLocalData = function () {
                return JSON.parse(localStorage.getItem('params'));
            };

            this.setLocalData = function (data) {
                localStorage.setItem('params', JSON.stringify(data));
            };
        }]);
})();
