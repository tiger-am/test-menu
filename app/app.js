'use strict';

// Declare app level module which depends on views, and core components
angular.module('app', [
    'ui.bootstrap',
    'ngRoute',
    'app.page',
    'app.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/page'});
}]);
