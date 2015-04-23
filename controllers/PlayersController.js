darkMenace.controller('PlayersCtrl', function PlayersCtrl($scope, playersFactory)
  $scope.players = PlayersFactory.players;

  $scope.addPlayer = function() {
    var name = $scope.playerName;
    PlayersFactory.addPlayer(name);
    $scope.playerName = null;
  };

)
