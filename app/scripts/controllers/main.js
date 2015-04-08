'use strict';

/**
 * @ngdoc function
 * @name atlantisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atlantisApp
 */
angular.module('atlantisApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
