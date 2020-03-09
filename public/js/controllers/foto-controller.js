angular
  .module("alurapic")
  .controller("FotoController", function($scope, recursoFoto, $routeParams) {
    $scope.foto = {};
    $scope.mensagem = "";

    if ($routeParams.fotoId) {
      recursoFoto.get(
        { fotoId: $routeParams.fotoId },
        function(foto) {
          $scope.foto = foto;
        },
        function(err) {
          console.log(err);
          $scope.mensagem = "Não foi possível obter a foto.";
        }
      );
    }

    $scope.submeter = function() {
      if ($scope.formulario.$valid) {
        if ($routeParams.fotoId) {
          recursoFoto.update(
            { fotoId: $scope.foto._id },
            $scope.foto,
            function() {
              $scope.mensagem =
                "Foto" + $scope.foto.titulo + " foi alterada com sucesso";
            },
            function(err) {
              console.log(err);
              $scope.mensagem =
                "Não foi possível alterar a foto " + $scope.foto.titulo;
            }
          );
        } else {
          recursoFoto.save(
            $scope.foto,
            function() {
              $scope.foto = {};
              $scope.mensagem = "Foto cadastrada com sucesso";
            },
            function(err) {
              $scope.mensagem = "Não foi possível incluir a foto";
              console.error(err);
            }
          );
        }
      }
    };
  });
