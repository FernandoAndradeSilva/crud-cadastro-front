var app = angular.module('meuModulo')

app.directive('usuarios', function () {

    return {
        restrict: 'E',
        templateUrl: 'templates/diretivas/usuarios.html',
        scope: {
            usuarios: '=users'
        },

        link : function (scope, element , attrs) {

            console.log(scope.usuarios)

        }

    }


})