var app = angular.module('meuModulo')
app.controller("indexControler", function ($scope, $http) {

    $scope.titulo = "Home"
    $scope.editando = false;

    $scope.alunos = [
        {
            nome: "Camila",
            email: "camila@gmail.com",
            nota1: 65,
            nota2: 60,
            nota3: 20,
        },
        {
            nome: "Pedro",
            email: "pedro@gmail.com",
            nota1: 100,
            nota2: 41,
            nota3: 22,
        },
        {
            nome: "Murilo",
            email: "murilo@gmail.com",
            nota1: 56,
            nota2: 74,
            nota3: 65,
        },
        {
            nome: "Fernando",
            email: "fernando@gmail.com",
            nota1: 50,
            nota2: 20,
            nota3: 30,
        },
    ]

    // var testeGet = function () {
    //     $http({
    //         method: 'GET',
    //         url: 'http://localhost:8080/colaboradores',
    //         data: 'parameters'
    //
    //     }).then(function success(response) {
    //
    //         console.log(response);
    //     }, function error(response) {
    //     });
    // }
    // testeGet();

    var init = function () {

        $scope.alunos.forEach(aluno => {
            aluno.media = media(aluno);
        })
        limpaForm();
    }


    var media = function (Aluno) {
        return ((parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3)) / 3).toFixed(2);
    }


    var alunoEditar;

    $scope.abreEditAluno = ((Aluno) => {
        $scope.editando = true;
        angular.copy(Aluno, $scope.Aluno)
        $('#modal1').modal('open');
        alunoEditar = Aluno;
    })

    $scope.salvarAluno = ((Aluno) => {
        alunoEditar.nome = Aluno.nome;
        alunoEditar.email = Aluno.email;
        alunoEditar.nota1 = Aluno.nota1;
        alunoEditar.nota2 = Aluno.nota2;
        alunoEditar.nota3 = Aluno.nota3;
        alunoEditar.media = media(Aluno);
        $('#modal1').modal('close');
    })

    $scope.abreAddAluno = (() => {
        $scope.editando = false;
        $('#modal1').modal('open');
        limpaForm();

    })

    $scope.addAluno = ((Aluno) => {
        Aluno.media = media(Aluno);
        $scope.alunos.push(Aluno);
        $('#modal1').modal('close');
        limpaForm();
    })


    $scope.deletarAluno = ((Aluno) => {
        for (var index in $scope.alunos) {
            var aux = $scope.alunos[index]

            if (Aluno === aux) {
                $scope.alunos.splice(index, 1);
            }

        }
    })

    var limpaForm = (() => {
        $scope.Aluno = {nome: "", email: "", nota1: '', nota2: '', nota3: '', media: ''};
    })


    init();


})

    .controller("contatoControler", function ($scope) {
        $scope.titulo = "Contato"
    })



