angular
  .module("alurapic")
  .controller("FotosController", function($scope, recursoFoto) {
    $scope.fotos = [];
    $scope.filtro = "";
    $scope.mensagem = "";

    recursoFoto.query(
      fotos => {
        $scope.fotos = fotos;
      },
      err => console.error(err)
    );

    $scope.remover = function(foto) {
      recursoFoto.delete(
        { fotoId: foto._id },
        function() {
          var indiceFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indiceFoto, 1);
          $scope.mensagem = "Foto " + foto.titulo + " removida com sucesso!";
        },
        function(err) {
          $scope.mensagem = "Não foi possível apagar a foto " + foto.titulo;
          console.error(err);
        }
      );
    };
  });
