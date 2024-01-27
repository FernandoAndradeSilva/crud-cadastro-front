var app = angular.module('meuModulo')

app.controller("inicialController", function ($scope, $http, $uibModal) {

    $scope.titulo = "PÁGINA INICIAL"

    $scope.cadastrarFuncionario = (() => {

        var modalInstance =  $uibModal.open({
            templateUrl: "/templates/diretivas/modal-cadastro-usuario/modal-cadastro-usuario.html",
            controller: "ModalContentCtrl",
            size: '',
        });

        modalInstance.result.then(function(response){
            $scope.result = `${response} button hitted`;
        });
    })
});

app.controller('ModalContentCtrl', function($scope, $uibModalInstance) {

    $scope.ok = function(){
        $uibModalInstance.close("Ok");
    }

    // $scope.cancel = function(){
    //     $modal.dismiss();
    // }

});
