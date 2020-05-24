(function () {
    "use strict";

    angular.module('app.page')
        .service('localStorageService', [function () {
            this.getMenuData = function () {
                return JSON.parse(localStorage.getItem('params'));
            };

            this.setMenuData = function (data) {
                localStorage.setItem('params', JSON.stringify(data));
            };
        }]);
})();
