
(function () {
    "use strict";

    angular.module('myApp.view1')
        .service('dataService', ['$http', function ($http) {
            this.getMenu = function () {
                return $http.get('menu.json').then(function (data) {
                    return data.data;
                });
            };
        }]);
})();
