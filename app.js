var app = angular.module('ngApp', []);

app.controller('ContatosCtrl', function($scope) {
	$scope.contatos = [
		{nome: 'Otavio', telefone: '9999-8888', email: 'otavio@email.com', salario: 500, data: Date.now()},
		{nome: 'Raquel', telefone: '1234-5678', email: 'raquel@email.com', salario: 12000.34, data: Date.now()},
		{nome: 'Jailson', telefone: '1111-2222', email: 'jailson@email.com', salario: 3000, data: Date.now()},
	];
});