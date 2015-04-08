'use strict';

/**
 * @ngdoc overview
 * @name atlantisApp
 * @description
 * # atlantisApp
 *
 * Main module of the application.
 */
angular
  .module('atlantisApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      });

    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
