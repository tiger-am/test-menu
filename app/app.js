'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ui.bootstrap',
    'ngRoute',
    'myApp.view1',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
