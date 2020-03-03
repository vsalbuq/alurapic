angular
  .module("alurapic")
  .controller("FotosController", function($scope, $http) {
    $scope.fotos = [];
    $scope.filtro = "";

    $http
      .get("/v1/fotos")
      .success(retorno => {
        $scope.fotos = retorno;
      })
      .error(err => console.error(err));
  });
