darkMenace.factory('PlayersFactory', function PlayersFactory() {
  var factory = {};
  factory.players =[];
  factory.addPlayer = function(newName) {
    factory.players.push({ name: newName, health: 3, backpack: []});
  };

  
});
