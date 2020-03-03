angular
  .module("minhasDiretivas", [])
  .directive("meuPainel", () => {
    var ddo = {};

    ddo.restrict = "AE";
    ddo.transclude = true;

    ddo.scope = {
      titulo: "@"
    };

    ddo.templateUrl = "js/directives/meu-painel.html";

    return ddo;
  })
  .directive("minhaFoto", () => {
    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
      titulo: "@",
      url: "@"
    };

    ddo.templateUrl = "js/directives/minha-foto.html";

    return ddo;
  });
