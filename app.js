var app = angular.module('ngApp', []);

app.controller('ContatosCtrl', function($scope, ContatoFactory, $http) {
	$scope.contatos = ContatoFactory.loadContatos();

	$scope.addContato = function(contato) {
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
	}

	$scope.delContato = function(contatos) {
		$scope.contatos = contatos.filter(function(c) {
			if(!c.selecionado) {
				return c;
			}
		});
	}
});