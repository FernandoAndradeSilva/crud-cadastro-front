angular.module("meuModulo", ['ngRoute'])


    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider

            .when("/home", {
                templateUrl: "templates/home.html",
                controller: "indexControler"

            })

            .when("/contato", {
                templateUrl: "templates/contato.html",
                controller: "contatoControler"
            })

            .when("/inicial", {
                templateUrl: "templates/inicial/inicial.html",
                controller: "inicialController"
            })




        $routeProvider
            .otherwise({
                redirectTo: "/home"
            });


    })