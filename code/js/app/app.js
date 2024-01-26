var app = angular.module("meuModulo", ['ngRoute','ngBootstrap5'])
app.config(function ($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider

            .when("/inicial", {
                templateUrl: "templates/inicial/inicial.html",
                controller: "inicialController"
            })




        $routeProvider
            .otherwise({
                redirectTo: "/inicial"
            });


    })