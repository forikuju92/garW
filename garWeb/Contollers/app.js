var garApp = angular.module("garApp", [ngRoute]);

garApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'Home.html', controller: 'HomeController'
        })
        .when('/whoweare', {
            templateUrl: 'About.html', controller: 'AboutController'
        })
        .when('/Products', {
            templateUrl: 'Product.html', controller: 'ProductsController'
        })
        .when('/services', {
            templateUrl: 'Service.html', controller: 'ServiceController'
        })
        .when('/Contact', {
            templateUrl: 'Contact.html', controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);