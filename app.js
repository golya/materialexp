var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.toggleSidenav2 = function(menuId) {
        $mdSidenav(menuId).toggle();
    };


    $scope.items = [
        {'price': 240, 'name': 'Item 01', 'img': 'img/01.jpg', 'class': 'green'},
        {'price': 240, 'name': 'Item 01', 'img': 'img/01.jpg', 'class': 'yellow'},
        {'price': 240, 'name': 'Item 01', 'img': 'img/01.jpg', 'class': 'blue'},
        {'price': 240, 'name': 'Item 01', 'img': 'img/01.jpg', 'class': 'yellow'},
        {'price': 240, 'name': 'Item 01', 'img': 'img/01.jpg', 'class': 'purple'},
        {'price': 240, 'name': 'Item 01', 'img': 'img/01.jpg', 'class': 'green'},
        {'price': 240, 'name': 'Item 01', 'img': 'img/01.jpg', 'class': 'blue'},
        {'price': 240, 'name': 'Item 01', 'img': 'img/01.jpg', 'class': 'yellow'},
        {'price': 240, 'name': 'Item 01', 'img': 'img/01.jpg', 'class': 'green'}
    ];

}]);


angular.module('buttonsDemo1', ['ngMaterial'])
    .controller('AppCtrl', function($scope) {
        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;
        $scope.googleUrl = 'http://google.com';
    });