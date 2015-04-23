var darkMenance = angular.module("darkMenance", ["ui.router"]);

darkMenance.config(function($stateProvider) {
  $stateProvider.state("home", {
    url: "",
    templateUrl: "partials/start.html"
  });

});
