'use strict';

var app = angular.module('myFirstApp', []);

app.controller('firstCtrl', function ($scope, CommService) {
    $scope.shared = CommService;
});

app.controller('secondCtrl', function ($scope, CommService) {
    $scope.shared2 = CommService;
});

app.service('CommService', function () {
    this.hello = 'hi from comm service';

    return this;
});