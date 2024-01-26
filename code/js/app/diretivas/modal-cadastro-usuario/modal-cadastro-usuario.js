var app = angular.module('meuModulo')

app.directive('modalCadastroUsuario', function ($http) {

    return {
        restrict: 'E',
        templateUrl: 'templates/diretivas/modal-cadastro-usuario/modal-cadastro-usuario.html',
        scope: {
            usuarios: '=users'
        },

        link : function (scope, element , attrs) {



            scope.teste = (() => {
                $http({
                            method: 'GET',
                            url: 'http://localhost:8080/colaboradores',
                            data: 'parameters'

                        }).then(function success(response) {

                            console.log(response);
                        }, function error(response) {
                        });
            })



            // $('.dropdown-trigger').dropdown();


        }

    }
})
