'use strict';

/**
 * @ngdoc function
 * @name atlantisApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the atlantisApp
 */
angular.module('atlantisApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
