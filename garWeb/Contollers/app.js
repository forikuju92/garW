var garApp = angular.module("garApp", ['ngRoute', 'ngAnimate']);

garApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'Home.html', controller: 'HomeController'
        })
        .when('/About', {
            templateUrl: 'About.html', controller: 'AboutController'
        })
        .when('/Product', {
            templateUrl: 'Product.html', controller: 'ProductController'
        })
        .when('/Service', {
            templateUrl: 'Service.html', controller: 'ServiceController'
        })
        .when('/Contact', {
            templateUrl: 'Contact.html', controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);