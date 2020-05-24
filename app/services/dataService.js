(function () {
    "use strict";

    angular.module('app.page')
        .service('dataService', ['$http', function ($http) {
            this.getMenu = function () {
                return $http.get('menu.json').then(function (data) {
                    return data.data;
                });
            };
        }]);
})();
