var darkMenance = angular.module("darkMenance", ["ui.router"]);

  darkMenance.config(function($stateProvider) {

    $stateProvider.state("home", {
      url: "",
      templateUrl: "partials/start.html"
    });

    $stateProvider.state("create_char", {
      url: "create",
      templateUrl: "partials/create_char.html",
      controller: "PlayersCtrl"
    });
});
