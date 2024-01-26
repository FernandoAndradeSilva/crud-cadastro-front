var app = angular.module('meuModulo')

app.directive('modalCadastroUsuario', function () {

    return {
        restrict: 'E',
        templateUrl: 'templates/diretivas/modal-cadastro-usuario/modal-cadastro-usuario.html',
        scope: {
            usuarios: '=users'
        },

        link : function (scope, element , attrs) {


            $('.dropdown-trigger').dropdown();


        }

    }


})